import React from 'react';
import SessionFormContainer from './session/session_form_container';
//pass all props
const App = ( props ) => (
  <section>
    <h1>Instaclone</h1>
    { props.children }
  </section>
);

export default App;
