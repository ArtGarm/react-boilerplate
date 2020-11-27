import HttpError from './error';
import getHeaders from './headers';

// eslint-disable-next-line func-names
export default async function (method, url, data, authenticated) {
  try {
    const headers = getHeaders(authenticated);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers,
      method,
      body: JSON.stringify(data),
    });

    const body = await response.text();
    const json = JSON.parse(body) || body;

    // here describe type error handled from API
    if (response.status === 400) {
      return new HttpError(json && json.message, response.status, json);
    }

    if (response.status < 200 || response.status >= 300) {
      return new HttpError(response.statusText, response.status, json);
    }

    return json;
  } catch (error) {
    console.error('Error in dataProvider -> fetch');
    throw error;
  }
}
