import { connect } from 'react-redux';
import Like from './like';
import { createLike, destroyLike, fetchLikes } from '../../actions/like_actions';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (post) => dispatch(createLike(post)),
    destroyLike: (post) => dispatch(destroyLike(post)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
