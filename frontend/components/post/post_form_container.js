import { connect } from 'react-redux';
import PostForm from './post_form';
import { makePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    image: state.post.image,
    userId: state.post.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePost: (post) => dispatch(makePost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
