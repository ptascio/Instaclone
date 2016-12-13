export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

import * as APIUtil from '../util/comment_api_util';

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export function makeComment(comment) {
  return(dispatch) => {
    return APIUtil.makeComment(comment).then(
      (comment) => dispatch(receiveNewComment(comment))
    );
  };
}
