import { RECEIVE_NEW_POST, RECEIVE_ERRORS, RECEIVE_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

//initialState?

const postReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_NEW_POST:
      return merge({}, state, action.post);
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    default:
      return state;
  }
};

export default postReducer;
