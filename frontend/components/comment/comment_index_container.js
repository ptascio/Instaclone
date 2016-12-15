import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { destroyComment, fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let comments;
  if (state.post[ownProps.postId]){
    comments = state.post[ownProps.postId].comments;
  } else {
    comments = [];
  }
  return {
    currentUser: state.session.currentUser,
    comments: comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyComment: (comment) => dispatch(destroyComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
