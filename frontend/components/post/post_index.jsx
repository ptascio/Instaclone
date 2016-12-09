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
      nextProps.fetchPosts();
    }
  }

  removePost() {
    this.props.deletePost();
  }

  render() {

    const item = this.props.posts.map(function(post, index) {
      return (
        <p key={index}>
          <span>{post.username}</span>
          <img src={post.image} height="200"/>
        </p>
      );
    });


    return (
      <div>
        <h1>This is posts index</h1>
        <article>
          { item }
        </article>
      </div>
    );
  }
}

export default PostIndex;
