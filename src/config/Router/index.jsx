import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from '../../components/PageWrapper';
import ROUTES from './routes';

export default () => (
  <Router>
    <Switch>
      {ROUTES.map((route, index) => (
        <Route
          key={() => index.toString()}
          path={route.path}
          exact={route.exact}
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={(props) => <Page {...props} component={route.component} routeName={route.name} />}
        />
      ))}
    </Switch>
  </Router>
);
