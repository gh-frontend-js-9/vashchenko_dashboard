import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './OLD_elements/Login/Login';
import Dashboard from './OLD_elements/Dashboard/Main/Main';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/app" component={Dashboard} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
