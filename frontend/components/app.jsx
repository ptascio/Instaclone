import React from 'react';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import PostFormContainer from './post/post_form_container';
import PostIndex from './post/post_index';

//pass all props

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
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
                  <div className="searchBar">
                  </div>
                  <div className="nav-functional">
                    <div className="nav-function-text">
                      <a href="/#/form"><span>Post</span></a><br />
                      <a href="/#/logout"><span>Logout</span></a>
                    </div>
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




export default App;
