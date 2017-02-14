import React from 'react';
import { Link, withRouter } from 'react-router';
const Modal = require('react-modal');

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      modalOpen: false
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleProfilePic(e){
    let file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[image]", file);
    this.props.updateUser(formData);
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }
  // updateProfilePic() {
  //   if (this.props.params.username === this.props.currentUser.username){
  //     return (
  //       <div className="user-img-style-update">
  //         <form>
  //           <input type="file"
  //             onChange={this.handleProfilePic}
  //             />
  //         </form>
  //       </div>
  //     );
  //   }
  // }

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
      if (this.props.params.username === this.props.currentUser.username){
        const divStyle = {
          opacity: 0.5,
        };
        profilePic = <img style={divStyle} src={this.props.userPage[this.props.params.username].image_url}  className="user-img-style" />;
      }

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
            <button className="profile-pic-button">
              Upload Photo
            </button>
          </li>
          <li>
            <button className="profile-pic-button">
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
      { modal }

      </section>
      );
}
}


export default withRouter(User);
