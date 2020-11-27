import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './path';

const PublicRoute = props => {
  const isLoggedIn = useSelector(state => state.auth.state);
  return !isLoggedIn ? <Route {...props} /> : <Redirect to={routes.private.index} />;
};

export default PublicRoute;
