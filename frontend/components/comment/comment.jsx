import React from 'react';

class Comment extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      body: "",
      username: this.props.currentUser.username,
      postId: this.props.postId
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.makeComment(comment).then(
      () => this.setState({ body: ""})
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
