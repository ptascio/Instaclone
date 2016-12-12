import { FOLLOW_USER, UNFOLLOW_USER, RECEIVE_FOLLOWERS, RECEIVE_FOLLOWING } from '../actions/relationship_actions';
import merge from 'lodash/merge';

let _nullRelationship = {
  followers: {},
  following: {}
};
const relationshipReducer = (state = _nullRelationship, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_FOLLOWERS:
      action.followers.forEach(follower => newState["followers"][follower.username] = follower);
      return newState;
    case RECEIVE_FOLLOWING:
      action.following.forEach(follow => newState["following"][follow.username] = follow);
      return newState;
    case FOLLOW_USER:
      // action.following.forEach(follow => newState["following"][follow.id] = follow);
      newState["following"][action.user.username] = action.user;
      return newState;
    case UNFOLLOW_USER:
      // action.following.forEach(follow => newState[follow.id] = follow);
      delete newState["following"][action.user.username];
      return newState;
    default:
      return state;
  }
};

export default relationshipReducer;
