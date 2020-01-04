import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

import { GoogleBooksActions } from 'actions/googleBooks';
import { VolumeList } from 'models/Volume';

export class GoogleBooksState extends Record<{
  volumeList: VolumeList;
  isSearching: boolean;
}>({
  volumeList: new VolumeList(),
  isSearching: false,
}) {}

export const googleBooksReducer = reducerWithInitialState(new GoogleBooksState())
  .case(GoogleBooksActions.setVolumes, (state, payload) => {
    return state.set('volumeList', payload);
  })
  .case(GoogleBooksActions.setIsSearching, (state, payload) => {
    return state.set('isSearching', payload);
  });
