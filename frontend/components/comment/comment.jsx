import React from 'react';
import merge from 'lodash/merge';

class Comment extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      username: this.props.currentUser.username,
      postId: this.props.postId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.postId !== this.state.postId) {
      this.setState({ postId: newProps.postId });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = merge({}, this.state);
    this.props.makeComment(comment).then(
      () => this.setState({ body: "" })
    );
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
    <section>
      <form className="comment-container" onSubmit={this.handleSubmit}>
        <input type="text"
          value={ this.state.body }
          placeholder="Add a Comment..."
          onChange={ this.handleChange("body")}
          className="comment-input" />
      </form>
    </section>
  );
  }
}

export default Comment;
