import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom"; //重要是要用到StaticRouter

import Routes from "../client/router";
import getStore from "../client/store";

export const render = req => {
  const store = getStore();
  //构建服务端的路由
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.baseUrl}>{Routes}</StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <title>react-ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
