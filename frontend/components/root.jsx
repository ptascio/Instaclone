import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import UserContainer from './user/user_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('user/:userId');
    }
  };

return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/login" />
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/user/userId" component={ UserContainer } />
      </Route>
    </Router>
  </Provider>
);
};


export default Root;
