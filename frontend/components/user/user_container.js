import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import User from './user';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(User);
