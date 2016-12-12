import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
