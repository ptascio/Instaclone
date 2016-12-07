import React from 'react';
import { Link, withRouter } from 'react-router';

const User = ({ currentUser, logout }) => (
  <section>
    <h2>Welcome { currentUser.username }</h2>
    <button onClick={logout}>Log Out</button>
  </section>
);

export default withRouter(User);
