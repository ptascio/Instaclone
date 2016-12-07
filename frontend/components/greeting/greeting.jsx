import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
//do this inside of the render
//fix indentation
  render() {

    if (this.props.currentUser) {

    return (
      <section>
        <h3>Hello {this.props.currentUser.username}</h3>
        <button onClick={this.props.logout}>Logout</button>
      </section>
    );
    } else {
        return (
          <section>
            <Link to="/signup">Sign Up</Link><br />
            <Link to="/login">Log In</Link>
          </section>
        );
      }
  }
}

export default Greeting;
