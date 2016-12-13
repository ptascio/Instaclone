import { RECEIVE_NEW_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_NEW_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      newState = merge({}, state, newComment);
      return newState;
    default:
      return state;

  }
};

export default commentReducer;
