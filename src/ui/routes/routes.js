import React from 'react';
import { Switch } from 'react-router-dom';

import { useCheckAuth } from 'ui/modules/auth/ducks/effects/checkAuth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Login from 'ui/pages/Login';
import Dashboard from 'ui/pages/Dashboard';

import routes from './path';

const Routes = () => {
  const isLoggedIn = useCheckAuth();
  if (typeof isLoggedIn !== 'boolean') {
    return 'loading';
  }

  return (
    <Switch>
      <PublicRoute path={routes.public.login} exact component={Login} />
      <PrivateRoute path={routes.private.index} component={Dashboard} />
    </Switch>
  );
};

export default Routes;
