import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";

import "./scss/index.scss";

const rootEl = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
