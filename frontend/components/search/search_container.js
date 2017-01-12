import { connect } from 'react-redux';
import Search from './search';
import { searchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    searchResults: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (userName) => dispatch(searchUsers(userName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
