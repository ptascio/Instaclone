import { RECEIVE_CURRENT_USER, REQUEST_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case LOGOUT:
      return merge({}, initialState);
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
