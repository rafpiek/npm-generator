import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import api from 'shared/redux/api/api.middleware';
// import appReducer from 'shared/redux/index.reducer';

import appReducer from 'redux/app.reducer';

const config = {
  key: 'root',
  storage: AsyncStorage
};

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(config, rootReducer);
// const middleware = [api];
const middleware = [];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'test') {
  middleware.push(logger);
}

let store;
if (['development', 'test'].includes(process.env.NODE_ENV)) {
  store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware, thunk))
  );
} else if (process.env.NODE_ENV === 'production') {
  store = createStore(persistedReducer, applyMiddleware(...middleware, thunk));
}

const persistor = persistStore(store);

export { store, persistor };
