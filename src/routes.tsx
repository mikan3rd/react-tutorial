import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { App } from 'components/App';
import { Otameshi } from 'components/Otameshi';

export const Path = {
  app: '/',
  otameshi: '/otameshi',
};

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.otameshi} component={Otameshi} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
);

export default routes;
