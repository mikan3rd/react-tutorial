import { all, fork } from 'redux-saga/effects';

import { GoogleBooksSaga } from 'sagas/googleBooks';

export const rootSaga = function* root() {
  yield all([fork(GoogleBooksSaga)]);
};
