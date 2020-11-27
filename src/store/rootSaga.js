import { all, fork } from 'redux-saga/effects';

// modules
import auth from 'ui/modules/auth/ducks/sagas';

const sagas = [auth];

export default function* rootSaga() {
  yield all(sagas.flat().map((saga) => fork(saga)));
}
