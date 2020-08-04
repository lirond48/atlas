import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Starter from "./starter";
import Single from "./single";
import Header from "./header";

function Main(props) {
  return (
    <div className="container d-flex flex-column">
      <Header />
      <Nav />
      <Switch>
        {/* <Route
          exact
          path={["/", "/country/:country", "/code/:code"]}
          component={Header}
        /> */}
        <Route exact path="/" component={Starter} />
        <Route exact path="/country/:country" component={Single} />
        <Route exact path="/code/:code" component={Single} />
      </Switch>
    </div>
  );
}

export default Main;
