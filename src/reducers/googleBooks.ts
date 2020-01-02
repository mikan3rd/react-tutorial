import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

import { GoogleBooksActions } from 'actions/googleBooks';
import { VolumeList } from 'models/Volume';

export class GoogleBooksState extends Record<{
  volumeList: VolumeList;
}>({
  volumeList: new VolumeList(),
}) {}

export const googleBooksReducer = reducerWithInitialState(new GoogleBooksState()).case(
  GoogleBooksActions.setVolumes,
  (state, payload) => {
    return state.set('volumeList', payload);
  },
);
