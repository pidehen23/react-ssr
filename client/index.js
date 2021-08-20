import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./router";
import { getClientStore } from "./store";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>{Router}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
