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
    if(this.props.params.username !== nextProps.params.username ||
      this.props.following !== nextProps.following
    ) {
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
    let button;
    if (this.props.currentUser.username !== this.props.params.username){
      if (allFollowing.hasOwnProperty(this.props.params.username)) {
        button = <button onClick={this.handleUnfollow} className="following-button group">Following</button>
      } else {
        button = <button onClick={this.handleFollow} className="follow-button group">Follow</button>
      }
    }else {
      button = <div></div>;
    }

    let profilePic;
    let postsCount;
    let followers;
    let following;
    let posts = [];

    if (this.props.userPage[this.props.params.username]){
      profilePic = <img src={this.props.userPage[this.props.params.username].image_url} className="user-img-style" />;
      followers = <span>{this.props.userPage[this.props.params.username].followers.length} followers</span>;
      following = <span>{this.props.userPage[this.props.params.username].following.length} following</span>;
      postsCount = <span>{this.props.userPage[this.props.params.username].posts.length} posts</span>;
    } else {
      profilePic = <div></div>;
      followers = <span></span>;
      following = <span></span>;
      postsCount = <span></span>;
    }

    if (this.props.userPage[this.props.params.username]){
      posts = this.props.userPage[this.props.params.username].posts;
    } else {
      posts = posts;
    }

    const userProfilePosts = posts.map(function(post) {
      return (
        <li key={post.id}><img src={post.image} className="user-pic"/></li>
      );
    });

      return (
      <section>
        <article className="user-container user-article">
        <header className="user-header group">
          <div className="user-img-container">
            { profilePic }
          </div>
          <div className="user-info-container">
          <h3 className="username group">{ this.props.params.username }</h3>
          <span className="button-wrapper">
            { button }
            </span>
            <ul className="user-stats">
              <li className="user-stats-li">
                { postsCount }
              </li>
              <li className="user-stats-li">
                { followers }
              </li>
              <li className="user-stats-li">
                  { following }
              </li>
            </ul>
          </div>
        </header>
        <section className="user-pics-container">
          <ul className="user-pic-ul">
          { userProfilePosts }
        </ul>
        </section>
      </article>
      </section>
      );
}
}


export default withRouter(User);
