export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";

import * as APIUtil from '../util/relationship_api_util';

export const followUser = () => ({
  type: FOLLOW_USER
});

export const unfollowUser = (user) => ({
  type: UNFOLLOW_USER,
  user
});

const receiveFollowers = (followers) => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

export function follow(user){
  return (dispatch) => {
    return APIUtil.follow(user).then(
      (user) => dispatch(followUser(user))
    );
  };
}

export function unfollow(user){
  return (dispatch) => {
    return APIUtil.unfollow(user).then(
      (user) => dispatch(unfollowUser(user))
    );
  };
}

export function fetchFollowers (currentUser) {
  return(dispatch) => {
    return APIUtil.fetchFollowers(currentUser).then(
      (followers) => dispatch(receiveFollowers(followers))
    );
  };
}
