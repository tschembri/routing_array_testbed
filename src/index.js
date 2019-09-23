import React from "react";
import ReactDOM from "react-dom";
import Main from "./Content/main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.querySelector("#root")
);
