import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import postReducer from './post_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  post :postReducer
});

export default rootReducer;
