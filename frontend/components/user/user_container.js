import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/user_actions';
import { follow, unfollow, fetchFollowing } from '../../actions/relationship_actions';
import User from './user';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    following: state.relationship.following,
    followers: state.relationship.followers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchFollowing: (currentUser) => dispatch(fetchFollowing(currentUser)),
    follow: () => dispatch(follow()),
    unfollow: (user) => dispatch(unfollow(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
