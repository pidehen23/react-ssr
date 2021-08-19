import React from "react";
import { renderToString } from "react-dom/server";
//重要是要用到StaticRouter
import { StaticRouter } from "react-router-dom";

import Routes from "../router";

export const render = req => {
  //构建服务端的路由
  const content = renderToString(
    <StaticRouter location={req.baseUrl}>{Routes}</StaticRouter>
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
