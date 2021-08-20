import React from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Home from "./component/Home";
import Login from "./component/Login";

// 根组件
const Root = ({ route }) => (
  <div>
    <div>
      <Link to="/home">home</Link>
    </div>
    <div>
      <Link to="/login">login</Link>
    </div>
    {renderRoutes(route.routes)}
  </div>
);

export const routes = [
  {
    path: "/",
    component: Root,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home,
        loadData: Home.loadData //服务端获取异步数据的函数
      },
      {
        path: "/login",
        component: Login,
        exact: true
      }
    ]
  }
];

export default <div>{renderRoutes(routes)}</div>;
