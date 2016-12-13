import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {

  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  handleFollow(e){
    e.preventDefault();
    this.props.follow(this.props.params.username);
  }

  handleUnfollow(e){
    e.preventDefault();
    this.props.unfollow(this.props.params.username);
  }

  render() {
    const allFollowing = this.props.following;
    let isFollowing;
    if (allFollowing.hasOwnProperty(this.props.params.username)) {
      isFollowing = true;
    } else {
      isFollowing = false;
    }
    if (this.props.currentUser.username !== this.props.params.username){
      if (isFollowing === true) {
      return (
        <section>
          <h3 className="username">{ this.props.params.username }</h3>
          <button onClick={this.handleUnfollow}>Unfollow</button>
        </section>
      );
      } else {
        return (
          <section>
            <h3 className="username">{ this.props.params.username }</h3>
            <button onClick={this.handleFollow}>Follow</button>
          </section>
        );
      }
    } else {
      return (
        <h3 className="username">{ this.props.params.username }</h3>
      );
    }
}
}

//bootstrap following upon log in


export default withRouter(User);
