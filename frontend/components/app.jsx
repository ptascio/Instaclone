import React from 'react';
import SessionFormContainer from './session/session_form_container';
//pass all props

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
          <h1>Instaclone</h1>
          <div>
            { this.props.children }
          </div>
      </section>
    );
  }
}




export default App;
