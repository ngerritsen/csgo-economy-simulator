/* global process */

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

let middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [createLogger()];
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
