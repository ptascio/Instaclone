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
          <article className="all-post post-holder pieko">
          <h3>{post.username}</h3>
            <div className="post-outside-container all-post _22yr2">
              <div className="post-inner-container all-post">
                <img src={post.image} className="post-image all-imgs"/>
              </div>
            </div>
          <button onClick={() => this.removePost(post)}>Delete</button>
          </article>
        </li>
      );
    }.bind(this));


    return (
      <main className="main-post main-section">
      <section className="section-post column-holder">
      <div className="all-post">
        <h1>This is posts index</h1>
        <ul>
          { items }
        </ul>
      </div>
    </section>
  </main>
    );
  }
}

export default PostIndex;
