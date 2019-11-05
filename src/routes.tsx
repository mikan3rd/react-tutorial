import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from 'App';
import { Otameshi } from 'Otameshi';

export const Path = {
  app: '/',
  otameshi: '/otameshi',
};

const routes = (
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.otameshi} component={Otameshi} />
    <Redirect to={Path.app} />
  </Switch>
);

export default routes;
