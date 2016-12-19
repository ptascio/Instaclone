import { connect } from 'react-redux';
import PostForm from './post_form';
import { makePost, fetchPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    image: state.post.image,
    userId: state.post.userId,
    allPosts: selectAllPosts(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePost: (post) => dispatch(makePost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
