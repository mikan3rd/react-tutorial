import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

import { GoogleBooksState, googleBooksReducer } from 'reducers/googleBooks';

export interface State {
  router: RouterState;
  googleBooks: GoogleBooksState;
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    googleBooks: googleBooksReducer,
  });
