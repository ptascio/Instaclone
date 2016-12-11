import React from 'react';
import { Link, withRouter } from 'react-router';

class Relationship extends React.Component {
  constructor(props){
    super(props);
    this.findFollowers = this.findFollowers.bind(this);
  }

  findFollowers(e){
    e.preventDefault();
    debugger
    this.props.fetchFollowers(this.props.currentUser);
  }
  render() {
    return (
      <section style={{marginTop: "30px"}}>
        <button onClick={this.findFollowers}>Followers</button>
      </section>
    );
  }
}

export default Relationship;
