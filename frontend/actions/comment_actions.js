export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

import * as APIUtil from '../util/comment_api_util';

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comment
});

export function makeComment(comment) {
  return(dispatch) => {
    return APIUtil.makeComment(comment).then(
      (comment) => dispatch(receiveNewComment(comment))
    );
  };
}
