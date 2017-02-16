import React from 'react';
import { Link, withRouter } from 'react-router';
import UserFollowing from './user_following';
const Modal = require('react-modal');

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      modalOpen: false,
      followingModal: false,
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleProfilePic = this.handleProfilePic.bind(this);
    this.updateProfilePic = this.updateProfilePic.bind(this);
    this.launchFollowing = this.launchFollowing.bind(this);
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

  launchFollowing(){
    this.setState({ followingModal: true });
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  handleProfilePic(e){
    let file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[image]", file);
    this.props.updateUser(formData).then(this.closeModal);
  }

  updateProfilePic() {
    if (this.props.params.username === this.props.currentUser.username){
      return (
        <div>
          <form>
            <input type="file"
              onChange={this.handleProfilePic}
              />
          </form>
        </div>
      );
    }
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
    let realFollowing;

    if (this.props.userPage[this.props.params.username]){
      if (this.props.params.username === this.props.currentUser.username){
        profilePic = <img style={{cursor: 'pointer'}} src={this.props.userPage[this.props.params.username].image_url}  className="user-img-style" />;
      }else {
        profilePic = <img src={this.props.userPage[this.props.params.username].image_url} className="user-img-style" />;
      }
      followers = <span>{this.props.userPage[this.props.params.username].followers.length} followers</span>;
      following = <span style={{cursor: 'pointer'}} onClick={this.launchFollowing}>{this.props.userPage[this.props.params.username].following.length} following</span>;
      postsCount = <span>{this.props.userPage[this.props.params.username].posts.length} posts</span>;
      realFollowing = this.props.userPage[this.props.params.username].following;
    } else {
      profilePic = <div></div>;
      followers = <span></span>;
      following = <span></span>;
      postsCount = <span></span>;
      realFollowing = [];
    }

    if (this.props.userPage[this.props.params.username]){
      posts = this.props.userPage[this.props.params.username].posts;
    } else {
      posts = posts;
    }

    let modal;
    const customStyles = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.75)',
        zIndex          : 10
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    if (this.props.params.username === this.props.currentUser.username){
      modal = <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Modal"

        >
        <ul className="user-profile-update">
          <li>Change Profile Picture</li>
          <li>
            <form className="profile-pic-button">
              <input type="file" onChange={this.handleProfilePic} className="myLabel-button user-myLabel-button"/>
              <span className="mask">Update Picture</span>
            </form>
          </li>
          <li>
            <button className="profile-pic-button" onClick={this.closeModal}>
              Cancel
            </button>
          </li>
        </ul>
      </Modal>;
    }else {
      modal = <div></div>;
    }

    const userProfilePosts = posts.map(function(post) {
      return (
        <li key={post.id}><img src={post.image} className="user-pic"/></li>
      );
    });

      return (
      <section>
        <article className="user-center">
        <header className="user-header group">
          <div onClick = {this.openModal} className="user-img-container" >
            { profilePic }
          </div>
          <div className="user-info-container user-container user-article">
          <h3 className="username group">{ this.props.params.username }</h3>
          <span className="button-wrapper">
            { button }
            </span>
            <ul className="user-stats">
              <li className="user-stats-li">
                { postsCount }
              </li>
              <li className="user-stats-li" >
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
      { modal }
        <UserFollowing
          modalOpen={this.state.followingModal}
          following={realFollowing}
          />
      </section>
      );
}
}


export default withRouter(User);
