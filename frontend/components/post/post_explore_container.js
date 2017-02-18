import { connect } from 'react-redux';
import PostExplore from './post_explore';
import { fetchExplorePosts } from '../../actions/post_actions';
import { selectAllPosts, selectAllComments, selectAllLikes } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    posts: selectAllPosts(state),
    allComments: selectAllComments(state),
    allLikes: selectAllLikes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExplorePosts: () => dispatch(fetchExplorePosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostExplore);
