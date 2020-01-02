import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { GoogleBooksActions } from 'actions/googleBooks';
import { VolumeList } from 'models/Volume';

const searchGoogleBooks = async (searchString: string) => {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const params = { q: searchString };
  try {
    const response = await axios.get(url, { params });
    return { isSuccess: true, data: response.data, error: null };
  } catch (error) {
    return { isSuccess: false, data: null, error };
  }
};

function* getVolumes(action: ReturnType<typeof GoogleBooksActions.getVolumes>) {
  const searchString = action.payload;
  const result = yield searchGoogleBooks(searchString);
  if (result.isSuccess) {
    yield put(GoogleBooksActions.setVolumes(VolumeList.fromResponse(result.data)));
  } else {
    window.alert(String(result.error));
  }
}

export function* GoogleBooksSaga() {
  yield takeLatest(GoogleBooksActions.getVolumes, getVolumes);
}
