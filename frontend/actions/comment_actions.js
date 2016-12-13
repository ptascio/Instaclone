export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


import * as APIUtil from '../util/comment_api_util';

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export function makeComment(comment) {
  return(dispatch) => {
    return APIUtil.makeComment(comment).then(
      (comment) => dispatch(receiveNewComment(comment))
    );
  };
}

export function destroyComment(comment) {
  return(dispatch) => {
    return APIUtil.destroyComment(comment).then(
      (comment) => dispatch(removeComment(comment))
    );
  };
}

export function fetchComments() {
  return(dispatch) => {
    return APIUtil.fetchComments().then(
      (comments) => dispatch(receiveComments(comments))
    );
  };
}
