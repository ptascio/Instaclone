import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, destroyPost } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    posts: selectAllPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    destroyPost: (post) => dispatch(destroyPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
