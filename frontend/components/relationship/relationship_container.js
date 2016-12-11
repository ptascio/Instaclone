import { connect } from 'react-redux';
import Relationship from './relationship';
import { fetchFollowers } from '../../actions/relationship_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFollowers: (currentUser) => dispatch(fetchFollowers(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Relationship);
