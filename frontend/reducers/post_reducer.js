import { RECEIVE_NEW_POST, RECEIVE_ERRORS, RECEIVE_POSTS, REMOVE_POST, RECEIVE_EXPLORE_POSTS } from '../actions/post_actions';
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
      action.posts.forEach(post => newState[post.id] = post);
      return newState;
    case RECEIVE_EXPLORE_POSTS:
      action.explorePosts.forEach(explorePost => newState[explorePost.id] = explorePost);
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
