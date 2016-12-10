import { RECEIVE_NEW_POST, RECEIVE_ERRORS, RECEIVE_POSTS, REMOVE_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_NEW_POST:
      const newPost = {[action.post.id]: action.post};
      newState = merge({}, state, newPost);
      
      return newState;
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
