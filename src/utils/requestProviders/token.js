export const accessTokenKey = 'accessToken';
export const refreshTokenKey = 'refreshToken';

export default {
  hasToken: (key = accessTokenKey) => !!localStorage[key],
  getToken: (key = accessTokenKey) => localStorage[key],
  saveTokens: (data) =>
    Object.keys(data).forEach((key) => localStorage.setItem(key, data[key])),
  clearTokens: () => localStorage.clear(),
};
