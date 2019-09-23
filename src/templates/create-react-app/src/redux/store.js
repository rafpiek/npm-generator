import localForage from 'localforage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './app.reducer';

localForage.setDriver(localForage.INDEXEDDB);
const config = {
  key: 'todoardo',
  storage: localForage
};

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(config, rootReducer);
const middleware = [];
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, ...middleware))
  );
} else {
  store = createStore(persistedReducer, applyMiddleware(thunk, ...middleware));
}

const persistor = persistStore(store);
export { store, persistor };
