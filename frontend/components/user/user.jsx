import React from 'react';
import { Link, withRouter } from 'react-router';


class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <section>
        <h2>Hello { currentUser.username }</h2>
      </section>
    );
  }
}


export default withRouter(User);
