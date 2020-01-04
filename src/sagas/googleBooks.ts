import { put, takeLatest } from 'redux-saga/effects';

import { GoogleBooksActions } from 'actions/googleBooks';
import { VolumeList } from 'models/Volume';
import { VolumeApi } from 'apiClient/googleBooks';

function* getVolumes(action: ReturnType<typeof GoogleBooksActions.getVolumes>) {
  yield put(GoogleBooksActions.setIsSearching(true));
  const searchString = action.payload;
  const params = { q: searchString };
  const response = yield VolumeApi.get(params);
  if (response.isSuccess) {
    yield put(GoogleBooksActions.setVolumes(VolumeList.fromResponse(response.data)));
  }
  yield put(GoogleBooksActions.setIsSearching(false));
}

export function* GoogleBooksSaga() {
  yield takeLatest(GoogleBooksActions.getVolumes, getVolumes);
}
