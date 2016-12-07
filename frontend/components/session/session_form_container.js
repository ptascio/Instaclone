import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

//does loggedIn work?
const mapStateToProps = (state) => {
  let loggedIn;
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  if ((ownProps.location.pathname).includes('login')){
    formType = 'login';
  }else {
    formType = 'signup';
  }

  const processForm = (formType === 'login') ? login : signup;
  return {
    formType,
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
