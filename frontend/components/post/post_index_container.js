import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    posts: selectAllPosts(state)
    // posts: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
