
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';
import createLogger from 'redux-logger';

const middleware = [];

if ( process.env.NODE_ENV !== 'production' ) {
  const logger = createLogger();
  middleware.push(logger);
}

middleware.push(thunkMiddleware);

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
);

export default configureStore;
