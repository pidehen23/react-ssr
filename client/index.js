import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./router";
import { getClientStore } from "./store";
import StyleContext from "isomorphic-style-loader/StyleContext";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss && style._insertCss());
  return () => removeCss.forEach(dispose => dispose && dispose());
};

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>{Router}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>,
  document.getElementById("root")
);
