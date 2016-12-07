import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <section>
        <h3>Hello { this.props.currentUser.username}</h3>
      </section>
    );
  }
}


export default withRouter(User);
