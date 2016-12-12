import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {

  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  handleFollow(e){
    e.preventDefault();
  }

  handleUnfollow(e){
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <h3 className="username">{ this.props.params.username }</h3>
        <button>Follow</button>
        <p>{ name }</p>
      </section>
    );
  }
}

//bootstrap following upon log in


export default withRouter(User);
