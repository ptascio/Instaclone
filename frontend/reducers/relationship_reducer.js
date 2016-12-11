import { FOLLOW_USER, UNFOLLOW_USER, RECEIVE_FOLLOWERS } from '../actions/relationship_actions';
import merge from 'lodash/merge';


const relationshipReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {0: "hi"};
  switch(action.type) {
    case RECEIVE_FOLLOWERS:
      action.followers.forEach(follower => newState[follower.id] = follower);
      return newState;
    case FOLLOW_USER:
      return state;
    case UNFOLLOW_USER:
      return state;
    default:
      return state;
  }
};

export default relationshipReducer;
