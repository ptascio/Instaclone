import React from 'react';
import { Link } from 'react-router';


class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.posts.length !== nextProps.posts.length){
      this.props.fetchPosts();
    }
  }

  removePost(post) {
    this.props.destroyPost(post);
  }

  render() {

    const items = this.props.posts.map(function(post, index) {
      return (
        <li key={index}>
          <h3>{post.username}</h3>
          <img src={post.image} height="200"/>
          <button onClick={() => this.removePost(post)}>Delete</button>
        </li>
      );
    }.bind(this));


    return (
      <div>
        <h1>This is posts index</h1>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
