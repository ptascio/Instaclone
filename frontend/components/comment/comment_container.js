import { connect } from 'react-redux';
import Comment from './comment';
import { makeComment, fetchComments } from '../../actions/comment_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeComment: (comment) => dispatch(makeComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
