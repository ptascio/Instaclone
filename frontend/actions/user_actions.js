export const RECEIVE_USER = "RECEIVE_USER";

import * as APIUtil from '../util/user_api_util';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export function fetchUser(username){
  return (dispatch) => {
    return APIUtil.fetchUser(username).then(user => {
        dispatch(receiveUser(user));
        return user;
  });
};
}
