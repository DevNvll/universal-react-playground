import { Route } from "react-router";
import React from "react";

import App from "./containers/App";
import {loggedIn} from './api/firebase';

//Redux Smart
import CounterPage from "./containers/CounterPage";
import Repos from "./containers/Repos";
import Login from "./containers/LoginPage";

//Redux Dumb
import HomePage from "./components/Home";
import error404 from "./components/404";

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({ nextPathname: nextState.location.pathname }, '/login' + nextState.location.pathname, nextState.location.query)
  }
}

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="counter" component={CounterPage} />
      <Route path="repos" component={Repos} onEnter={requireAuth} />
      <Route path="login" component={Login} />
      <Route path="login/:next" component={Login} />
      <Route path="*" component={error404}/>
  </Route>
);
