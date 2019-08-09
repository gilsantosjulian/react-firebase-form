import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/Home";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-navi";
import routes from "./routes";
import { createBrowserNavigation } from "navi";

let navigation = createBrowserNavigation({ routes });

ReactDOM.render(
  <Router navigation={navigation}>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
