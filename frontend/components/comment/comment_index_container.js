import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { destroyComment, fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let count = 0;
  Object.keys(state.post).forEach(post => {
   count += state.post[post].comments.length;
});
  return {
    currentUser: state.session.currentUser,
    comments: state.post[ownProps.postId].comments,
    allComments: count
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
