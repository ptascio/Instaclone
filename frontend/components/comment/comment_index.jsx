import React from 'react';
import { Link } from 'react-router';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postId: this.props.postId
    };
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(nextProps){
  debugger
    if(this.props.comments.length !== nextProps.comments.length){
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
