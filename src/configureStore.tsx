import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { State, rootReducer } from 'reducers';
import { rootSaga } from 'sagas';

export const history = createBrowserHistory();

export function configureStore(preloadedState?: State) {
  const sagaMiddleware = createSagaMiddleware({
    onError(error) {
      throw error;
    },
  });
  const logger = createLogger();
  const middlewares = [routerMiddleware(history), sagaMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
