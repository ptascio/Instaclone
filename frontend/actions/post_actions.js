export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";

import * as APIUtil from '../util/post_api_util';

export const receiveNewPost = (post) => ({
  type: RECEIVE_NEW_POST,
  post
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export function destroyPost(post) {
  return(dispatch) => {
    return APIUtil.destroyPost(post).then(
      (post) => dispatch(removePost(post))
    );
  };
}

export function makePost(post) {
  return(dispatch) => {
    return APIUtil.makePost(post).then(
      (post) => dispatch(receiveNewPost(post)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export function fetchPosts() {
  return(dispatch) => {
    return APIUtil.fetchPosts().then(
      (posts) => dispatch(receivePosts(posts))
    );
  };
}
