import token from './token';

const getHeaders = (authenticated) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  // headers for JWT token
  if (authenticated) headers.set('Authorization', `Bearer ${token.getToken()}`);

  return headers;
};

export default getHeaders;
