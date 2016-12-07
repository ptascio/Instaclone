import React from 'react';
import SessionFormContainer from './session/session_form_container';
//pass all props
const App = ( props ) => (
  <section>
      <h1>Instaclone</h1>
      <div>
        { props.children }
      </div>
  </section>
);



export default App;
