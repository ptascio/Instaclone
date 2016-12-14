import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.currentUser.id,
      postId: this.props.postId,
      liked: this.props.currentUser.liked_posts.includes(this.props.postId)
    };
    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchLikes();
  }

  toggleLike() {
    if (this.state.liked){
      this.props.destroyLike(this.props.postId);
      this.setState({
        liked: !this.state.liked
      });
    } else {
      this.props.createLike(this.props.postId);
      this.setState({
        liked: !this.state.liked
      });
    }
  }

  render() {
    let likeClass;
    if (this.state.liked){
      likeClass = "fa fa-heart";
    } else {
      likeClass = "fa fa-heart-o";
    }
    return (
      <a className="heart-container">
        <i className={ likeClass } onClick={this.toggleLike}></i>
      </a>
    );
  }
}

export default Like;
