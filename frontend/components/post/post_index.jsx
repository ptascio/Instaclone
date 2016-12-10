import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';


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
        <li key={index} className="li-spacing">
          <article className="all-post post-holder">

          <header className="pieko _s6yvg">
            <a className="header-img-container">
              <img src={post.image} className="header-img"/>
            </a>
            <div className="inner-header">
              <a className="inner-header-text notranslate">
                {post.username}
              </a>
              <TimeAgo date={post.created_at} />
            </div>
          </header>
            <div className="post-outside-container all-post-inside _22yr2">
              <div className="post-inner-container all-post-inside">
                <img src={post.image} className="post-image all-imgs"/>
              </div>
            </div>
          <button onClick={() => this.removePost(post)}>Delete</button>
          </article>
        </li>
      );
    }.bind(this));


    return (

      <section className="section-post column-holder">
      <div className="all-post">
        <h1>This is posts index</h1>
        <ul>
          { items }
        </ul>
      </div>
    </section>

    );
  }
}

export default PostIndex;
