import React from 'react';
import { Link, withRouter } from 'react-router';

class Relationship extends React.Component {
  constructor(props){
    super(props);
    this.findFollowers = this.findFollowers.bind(this);
    this.findFollowing = this.findFollowing.bind(this);
  }

  findFollowers(e){
    e.preventDefault();
    this.props.fetchFollowers(this.props.currentUser);
  }

  findFollowing(e){
    e.preventDefault();
    this.props.fetchFollowing(this.props.currentUser);
  }
  render() {
    return (
      <section style={{marginTop: "30px"}}>
        <button onClick={this.findFollowers}>Followers</button>
        <button onClick={this.findFollowing}>Following</button>
      </section>
    );
  }
}

export default Relationship;
