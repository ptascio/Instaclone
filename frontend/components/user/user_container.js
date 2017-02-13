import { connect } from 'react-redux';
import { logout, fetchUser, updateUser } from '../../actions/user_actions';
import { follow, unfollow, fetchFollowing } from '../../actions/relationship_actions';
import User from './user';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    following: state.relationship.following,
    followers: state.relationship.followers,
    userPage: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
    updateUser: (data, username) => dispatch(updateUser(data, username)),
    fetchFollowing: (currentUser) => dispatch(fetchFollowing(currentUser)),
    follow: (user) => dispatch(follow(user)),
    unfollow: (user) => dispatch(unfollow(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
