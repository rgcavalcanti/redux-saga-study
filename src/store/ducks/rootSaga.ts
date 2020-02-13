import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from './users/types';
import { load } from './users/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.LOAD_REQUEST, load)]);
}
