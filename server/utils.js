import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom"; //重要是要用到StaticRouter
import { matchRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";

import Routes, { routes } from "../client/router";
import { getServerStore } from "../client/store";

// 改造这里 服务端做数据预取
const loadBranchData = (pathname, store) => {
  // 使用 matchRoutes api做路由匹配
  const branch = matchRoutes(routes, pathname);

  const promises = branch.map(({ route, match }) => {
    // 判断匹配的路由是否挂载有异步加载数据逻辑
    return route.loadData
      ? route.loadData(store, match) // 把store 和 match 传入数据预取函数
      : Promise.resolve(null);
  });

  return Promise.all(promises);
};

export const render = (req, res) => {
  const store = getServerStore();
  // console.log("req.baseUrl  ", req.baseUrl);

  // 加载完数据后，再把组件生成字符串返回，现在返回的组件都是有数据的结果
  loadBranchData(req.baseUrl, store)
    .then(data => {
      // console.log("server-data ", data);
      // 到这里所有的数据预加载完毕
      // 数据加载完毕后再渲染组件
      const string = getRenderString();
      res.send(string);
    })
    .catch(() => {
      res.send("loadBranchData_error");
    });

  function getRenderString() {
    // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回
    // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中
    const css = new Set(); // CSS for all rendered React components
    const insertCss = (...styles) =>
      styles.forEach(style => css.add(style._getCss()));

    const content = renderToString(
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={req.baseUrl}>{Routes}</StaticRouter>
        </Provider>
      </StyleContext.Provider>
    );

    // 数据注水
    const hydrate = `
      window.initialState = ${JSON.stringify(store.getState())};
    `;

    return `<!doctype html>
      <html>
        <head>
          <title>ssr</title>
          <style>${[...css].join("")}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            ${hydrate}
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
  }
};
