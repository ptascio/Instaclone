import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {

  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    debugger
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  handleFollow(e){
    e.preventDefault();
  }

  handleUnfollow(e){
    e.preventDefault();
  }

  render() {
    let allFollowing = this.props.following;
    let isFollowing;
    if (allFollowing.hasOwnProperty(this.props.params.username)) {
      isFollowing = true;
    } else {
      isFollowing = false;
    }

    if (isFollowing) {
    return (
      <section>
        <h3 className="username">{ this.props.params.username }</h3>
        <button>Unfollow</button>
      </section>
    );
    } else {
      return (
        <section>
          <h3 className="username">{ this.props.params.username }</h3>
          <button>Follow</button>
        </section>
      );
    }
  }
}

//bootstrap following upon log in


export default withRouter(User);
