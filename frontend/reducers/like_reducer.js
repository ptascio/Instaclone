import { RECEIVE_LIKE, RECEIVE_UNLIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';
import merge from 'lodash/merge';

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      newState = {};
      action.likes.forEach(like => newState[like.userId] = like);
      return newState;
    case RECEIVE_LIKE:
      return state;
    case RECEIVE_UNLIKE:
      newState = merge({}, state);
      debugger
      delete newState[action.post.userId];
      debugger
      return state;
    default:
      return state;

  }
};

export default likeReducer;
