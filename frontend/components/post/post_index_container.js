import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, destroyPost } from '../../actions/post_actions';
import { selectAllPosts, selectAllComments, selectAllLikes } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    posts: selectAllPosts(state),
    allComments: selectAllComments(state),
    allLikes: selectAllLikes(state)
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
