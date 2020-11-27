import resources from 'resources';
import tokenHelpers, { refreshTokenKey } from './token';
import fetchHelper from './fetch';

const reauthenticate = async () => {
  if (tokenHelpers.hasToken(refreshTokenKey)) {
    const response = await fetchHelper(
      'POST',
      resources.reauthenticate,
      { refreshToken: tokenHelpers.getToken(refreshTokenKey) },
      false
    );
    tokenHelpers.saveTokens(response);
    return true;
  }
  return false;
};

const login = async (data) => {
  const response = await fetchHelper('POST', resources.login, data, false);
  tokenHelpers.saveTokens(response);
  return response;
};

export default {
  login,
  reauthenticate,
  checkAuth: () => (tokenHelpers.hasToken() ? tokenHelpers.getToken() : false),
  logout: () => tokenHelpers.clearTokens(),
};
