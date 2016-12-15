import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import CommentContainer from '../comment/comment_container';
import CommentIndexContainer from '../comment/comment_index_container';
import LikeContainer from '../like/like_container';


class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.posts.length !== nextProps.posts.length ||
      this.props.allComments.length !== nextProps.allComments.length ||
      this.props.allLikes.length !== nextProps.allLikes.length) {
      this.props.fetchPosts();
    }
  }

  removePost(post) {
    this.props.destroyPost(post);
  }
//kind of cheap way to make sure newest posts show up first
  render() {

    const allposts = this.props.posts.reverse();

    const items = allposts.map(function(post, index) {

      let likesCount;
      if (post.likes){
        likesCount = post.likes.length;
      } else {
        likesCount = 0;
      }
      let userUrl = `/users/${post.username}`;
      return (
        <li key={index} className="li-spacing">
          <article className="all-post post-holder">
          <header className="pieko _s6yvg header-container">
            <a className="header-img-container">
              <img src={post.userImg} className="header-img"/>
            </a>
            <div className="inner-header">
              <Link to={ userUrl }>
                {post.username}
              </Link>
            </div>
            <time className="time-container">
              <TimeAgo date={post.created_at} />
            </time>
          </header>
            <div className="post-outside-container all-post-inside _22yr2">
              <div className="post-inner-container all-post-inside">
                <img src={post.image} className="post-image all-imgs"/>
              </div>
            </div>
            <div className="info-container">
              <section className="likes-container likes-container-flex-style">
                <div className="likes-text-container likes-text-container-flex-style">
                  <span className="likes-text">{ likesCount } likes</span>
                </div>
                <CommentIndexContainer postId={post.id}/>
              </section>
              <ul className="caption-container">
                <li className="caption-li">
                  <h1 className="caption-wrapper">
                    <a className="inner-header-text caption-name">{post.username}</a>
                    <span className="caption-text">{post.caption}</span>
                  </h1>
                </li>
              </ul>
              <section className="add-comment">
                  <LikeContainer postId={post.id}/>
                  <CommentContainer postId={post.id}/>
              </section>
            </div>
          <button onClick={() => this.removePost(post)} className="edit-options">Delete</button>
          </article>
        </li>
      );
    }.bind(this));


    return (

      <section className="section-post column-holder">
      <div className="all-post">
        <ul className="feed">
          { items }
        </ul>
      </div>
    </section>

    );
  }
}

export default PostIndex;
