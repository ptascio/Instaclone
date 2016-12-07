export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REQUEST_USER = "REQUEST_USER";


import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestUser = () => ({
  type: REQUEST_USER
});

export function signup(user){
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function login(user){
  return (dispatch) => {
    return APIUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function fetchUser(id){
  return (dispatch) => {
    dispatch(requestUser());
    return APIUtil.fetchUser(id).then(user => {
        dispatch(receiveCurrentUser(user));
        return user;
  });
};
}
//logout need errors?
//user should not be able to signout unless signed in,
//but user should also never see logout button without signing in
//so maybe errors not necessary?
export function logout(){
  return (dispatch) => {
    return APIUtil.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
