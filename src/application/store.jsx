import { compose, applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

// dev tool
const composeEnhancers =
(process.env.REACT_APP_NODE_ENV === 'development' &&
typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "undefined"
? (a) => a
// eslint-disable-next-line
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

// eslint-disable-next-line
export const configureStore = (services) =>
  createStore(reducers, composeEnhancers(applyMiddleware(...middleware.map((f) => f(services)))));
