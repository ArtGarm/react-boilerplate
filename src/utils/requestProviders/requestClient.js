import fetchHelper from './fetch';
import authProvider from './authProvider';

const requestClient = async (method, url, data) => {
  try {
    return await fetchHelper(method, url, data);
  } catch (error) {
    const reauthenticateIfNeeded =
      error.status === 401 && (await authProvider.reauthenticate());

    if (reauthenticateIfNeeded) {
      // eslint-disable-next-line no-return-await
      return await fetchHelper(method, url, data);
    }
    throw error;
  }
};

export default requestClient;
