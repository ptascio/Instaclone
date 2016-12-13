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

  componentWillReceiveProps(nextProps){
    if(this.props.allComments !== nextProps.allComments){
      this.props.fetchComments();
    }
  }

  removeComment(comment) {
    this.props.destroyComment(comment);
  }

  render() {
    let reverseComments = this.props.comments.reverse();
    const postComments = reverseComments.map(function(comment) {
      return (
        <li key={comment.id}>
          {comment.username}
          {comment.body}
        <button onClick={() => this.removeComment(comment)}>Delete</button>
        </li>
      );
    }.bind(this));
    return (
      <section>
        <ul>
          { postComments }
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
