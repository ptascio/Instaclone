import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_USER:
      newState[action.user] = user;
      return newState;
    default:
      return state;
  }
};
