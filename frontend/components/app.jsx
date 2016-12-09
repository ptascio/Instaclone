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
          <h1>Instaclone</h1>
            { this.props.children }
      </section>
    );
  }
}




export default App;
