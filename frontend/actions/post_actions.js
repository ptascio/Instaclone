export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

import * as APIUtil from '../util/post_api_util';

export const receiveNewPost = (post) => ({
  type: RECEIVE_NEW_POST,
  post
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export function makePost(post) {
  return(dispatch) => {
    return APIUtil.makePost(post).then(
      (newPost) => dispatch(receiveNewPost(newPost)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
