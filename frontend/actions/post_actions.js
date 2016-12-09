export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

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

export function makePost(post) {
  return(dispatch) => {
    return APIUtil.makePost(post).then(
      (newPost) => dispatch(receiveNewPost(newPost)),
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
