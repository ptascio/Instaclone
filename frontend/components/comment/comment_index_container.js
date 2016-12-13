import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    comments: state.post[ownProps.postId].comments
  };
};

export default connect(
  mapStateToProps
)(CommentIndex);
