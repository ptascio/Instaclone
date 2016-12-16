import React from 'react';
import { Link } from 'react-router';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postId: this.props.postId
    };
    this.removeComment = this.removeComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }



  removeComment(comment) {
    this.props.destroyComment(comment);
  }

  render() {
    let reverseComments;
    if (this.props.comments){
      reverseComments = this.props.comments.reverse();
    } else {
      reverseComments = [];
    }

    const postComments = reverseComments.map(function(comment) {
      let deleteButton;
      if (comment.username === this.props.currentUser.username){
        deleteButton = <button onClick={() => this.removeComment(comment)} className="comment-delete-button">delete</button>;
      } else {
        deleteButton = <div></div>;
      }
        let userUrl = `/users/${comment.username}`;
      return (
        <li key={comment.id} className="comment-li-list">
          <Link to={ userUrl } className="comment-username">{comment.username}</Link>
          <span>{comment.body}</span>
          { deleteButton }
        </li>
      );
    }.bind(this));
    return (
      <section>
        <ul className="comment-ul-list">
          { postComments }
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
