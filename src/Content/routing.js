import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

function Content() {
  return (
    <>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Redirect from="/" to="page3" />
      </Switch>
    </>
  );
}

export default Content;
