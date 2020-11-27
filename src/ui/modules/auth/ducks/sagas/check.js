import { takeLatest, put, call } from 'redux-saga/effects';
import authProvider from 'utils/requestProviders/authProvider';
import { auth } from '../index';

export function* check() {
  try {
    const token = yield call(authProvider.checkAuth);
    // todo: parse token and get user id
    const userId = token ? 'userId' : null;

    yield put({ type: auth.check.end, payload: { state: !!userId, userId } });
  } catch ({ message }) {
    yield put({
      type: auth.check.error,
      payload: { state: false, error: message },
    });
  }
}

export default function* checkAuthSaga() {
  yield takeLatest(auth.check.start, check);
}
