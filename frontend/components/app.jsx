import React from 'react';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import PostFormContainer from './post/post_form_container';
import PostIndex from './post/post_index';
import SearchContainer from './search/search_container';
import { fetchFollowing, fetchFollowers } from '../actions/relationship_actions';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);

  }
  componentDidMount() {
    this.props.fetchFollowing(this.props.currentUser);
    this.props.fetchFollowers(this.props.currentUser);
  }

  signOut() {
    this.props.logout();
    this.props.router.push("/welcome");
  }


  render(){
    let userUrl = `users/${this.props.currentUser.username}`;
    return (
      <section>
        <nav className="nav-container">
          <div className="nav-first-layer">
            <div className="inner-nav">
              <div className="nav-info-container nav-info-flex-style">
                <div className="all-info">
                  <div className="img-container">
                    <a className="img-logo" href="/">
                      <span className="logo-text">Instaclone</span>
                    </a>

                  </div>


                </div>
                <div className="move-search">
                  <SearchContainer />
                </div>
                <div className="nav-functional">
                  <div className="nav-functional-text">
                    <a href="/#/form"><span className="link-items">Post</span></a><br />
                    <a href="" onClick={this.signOut}><span className="link-items">Logout</span></a>
                    <Link to={ userUrl } ><span className="link-items">Me</span></Link>
                    <a href=""><span className="link-items">Explore</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
            { this.props.children }
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
  currentUser: state.session.currentUser,
  following: state.relationship.following,
  followers: state.relationship.followers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFollowing: (currentUser) => dispatch(fetchFollowing(currentUser)),
  fetchFollowers: (currentUser) => dispatch(fetchFollowers(currentUser)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
