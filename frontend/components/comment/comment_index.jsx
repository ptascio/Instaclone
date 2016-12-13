import React from 'react';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postId: this.props.postId
    };
  }

  render() {
    let reverseComments = this.props.comments.reverse();
    const postComments = reverseComments.map(function(comment) {

      return (
        <li key={comment.id}>
          {comment.username}
          {comment.body}
        </li>
      );
    });
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
