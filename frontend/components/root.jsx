import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import UserContainer from './user/user_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/welcome');
    }
  };


return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/welcome' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} >
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/signup" component={ SessionFormContainer } />
      </Route>
      <Route path="/" onEnter={_ensureLoggedIn} component={ App }>

      </Route>
    </Router>
  </Provider>
);
};


export default Root;
