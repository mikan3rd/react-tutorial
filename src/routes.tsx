import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { App } from 'components/App';
import { GoogleBooks } from 'components/GoogleBooks';

export const Path = {
  app: '/',
  googleBooks: '/google_books',
};

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.googleBooks} component={GoogleBooks} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
);

export default routes;
