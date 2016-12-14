import { RECEIVE_LIKE, RECEIVE_UNLIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';
import merge from 'lodash/merge';

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      newState = {};
      action.likes.forEach(like => newState[like.id] = like);
      return newState;
    case RECEIVE_LIKE:
      newState = merge({}, state);
      newState[action.post.userId] = action.post;
      return newState;
    case RECEIVE_UNLIKE:
      newState = merge({}, state);
      delete newState[action.post.userId];
      return newState;
    default:
      return state;

  }
};

export default likeReducer;
