import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  // routeIsCorrect() {
  //   return parseInt(this.props.userId)
  // }

  render() {
    return (
      <section>
        <h3>Hello { this.props.currentUser.username }</h3>
        <button>Follow</button>
      </section>
    );
  }
}


export default withRouter(User);
