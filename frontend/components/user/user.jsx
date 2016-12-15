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
      profilePic = <img src={this.props.userPage[this.props.params.username].image_url} className="user-img-style" />;
    } else {
      profilePic = <div></div>;
    }

    if (this.props.currentUser.username !== this.props.params.username){
      if (isFollowing === true) {
      return (
        <header className="user-header group">
          <div className="user-img-container">
            { profilePic }
          </div>
          <div className="user-info-container">
          <h3 className="username group">{ this.props.params.username }</h3>
          <span className="button-wrapper">
            <button onClick={this.handleUnfollow} className="following-button group">Following</button>
            </span>

            <ul className="user-stats">
              <li>
                <span>
                  posts
                </span>
              </li>
              <li>
                <span>
                  followers
                </span>
              </li>
            </ul>
          </div>
        </header>
      );
      } else {
        return (
          <header>
            <h3 className="username">{ this.props.params.username }</h3>
              { profilePic }
            <button onClick={this.handleFollow} className="follow-button">Follow</button>
          </header>
        );
      }
    } else {
      return (
        <header>
          <h3 className="username">{ this.props.params.username }</h3>
          { profilePic }
        </header>
      );
    }
}
}

//bootstrap following upon log in


export default withRouter(User);
