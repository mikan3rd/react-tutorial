import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

import { GoogleBooksActions } from 'actions/googleBooks';

export class GoogleBooksState extends Record<{
  test: string;
}>({
  test: 'test',
}) {}

export const googleBooksReducer = reducerWithInitialState(new GoogleBooksState()).case(
  GoogleBooksActions.initialize,
  (state, payload) => {
    return state.set('test', 'aaa');
  },
);
