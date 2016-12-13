import React from 'react';

class Comment extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      username: this.props.currentUser.username
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.makeComment(this.state.comment);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
    <section>
      <form>
        <input type="text"
          value={ this.state.body }
          placeholder="Add a Comment..."
          onChange={ this.handleChange("username")} />
      </form>
    </section>
  );
  }
}

export default Comment;
