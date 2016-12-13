import { connect } from 'react-redux';
import Comment from './comment';
import { makeComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeComment: (comment) => dispatch(makeComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
