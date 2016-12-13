import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import postReducer from './post_reducer';
import relationshipReducer from './relationship_reducer';
import commentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  post: postReducer,
  relationship: relationshipReducer,
  comment: commentReducer
});

export default rootReducer;
