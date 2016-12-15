export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

import * as APIUtil from '../util/user_api_util';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export function fetchUser(username){
  return (dispatch) => {
    return APIUtil.fetchUser(username).then(user => {
        dispatch(receiveUser(user));
        return user;
  });
};
}

export function fetchAllUsers() {
  return (dispatch) => {
    return APIUtil.fetchAllUsers().then(users => {
      dispatch(receiveAllUsers(users));
      return users;
    });
  };
}
