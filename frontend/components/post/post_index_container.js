import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, destroyPost, } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchLikes } from '../../actions/like_actions';
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
    fetchPosts: () => dispatch(fetchPosts()),
    destroyPost: (post) => dispatch(destroyPost(post)),
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
