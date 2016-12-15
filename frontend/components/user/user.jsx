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

  componentWillReceiveProps(nextProps){
    if(this.props.params !== nextProps.params) {
      this.props.fetchUser(nextProps.params.username);
    }
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

    let profilePic;
    if (this.props.userPage[this.props.params.username]){
      profilePic = <img src={this.props.userPage[this.props.params.username].image_url} className="user-img-container" />;
    } else {
      profilePic = <div></div>;
    }

    if (this.props.currentUser.username !== this.props.params.username){
      if (isFollowing === true) {
      return (
        <section>
          <div className="user-info-container">
          <h3 className="username group">{ this.props.params.username }</h3>
            <button onClick={this.handleUnfollow} className="following-button group">Following</button>
            </div>
            { profilePic }
        </section>
      );
      } else {
        return (
          <section>
            <h3 className="username">{ this.props.params.username }</h3>
              { profilePic }
            <button onClick={this.handleFollow} className="follow-button">Follow</button>
          </section>
        );
      }
    } else {
      return (
        <section>
          <h3 className="username">{ this.props.params.username }</h3>
          { profilePic }
        </section>
      );
    }
}
}

//bootstrap following upon log in


export default withRouter(User);
