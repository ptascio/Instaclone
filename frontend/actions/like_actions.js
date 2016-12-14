export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_UNLIKE = "RECEIVE_UNLIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

import * as APIUtil from '../util/like_api_util';

export const receiveLike = post => ({
  type: RECEIVE_LIKE,
  post
});

export const receiveUnlike = post => ({
  type: RECEIVE_UNLIKE,
  post
});

export const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export function createLike(post) {
  return(dispatch) => {
    return APIUtil.createLike(post).then(
      (post) => dispatch(receiveLike(post))
    );
  };
}

export function destroyLike(post) {
  return(dispatch) => {
    return APIUtil.destroyLike(post).then(
      (post) => dispatch(receiveUnlike(post))
    );
  };
}

export function fetchLikes() {
  return(dispatch) => {
    return APIUtil.fetchLikes().then(
      (likes) => dispatch(receiveAllLikes(likes))
    );
  };
}
