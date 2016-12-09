import { RECEIVE_NEW_POST, RECEIVE_ERRORS, RECEIVE_POSTS, DELETE_POST_ITEM } from '../actions/post_actions';
import merge from 'lodash/merge';

//initialState?

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_NEW_POST:
      return merge({}, state, action.post);
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case DELETE_POST_ITEM:
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
