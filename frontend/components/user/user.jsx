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
        <h3 className="username">{ this.props.params.username }</h3>
        <button>Follow</button>
      </section>
    );
  }
}


export default withRouter(User);
