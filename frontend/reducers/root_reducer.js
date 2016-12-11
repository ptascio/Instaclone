import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import postReducer from './post_reducer';
import relationshipReducer from './relationship_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  post :postReducer,
  relationship :relationshipReducer
});

export default rootReducer;
