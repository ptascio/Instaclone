import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import UserContainer from './user/user_container';
import PostIndexContainer from './post/post_index_container';
import PostFormContainer from './post/post_form_container';
import RelationshipContainer from './relationship/relationship_container';



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

//on App build the header in the App component
//build another c
return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/welcome' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} >
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/signup" component={ SessionFormContainer } />

      </Route>
      <Route path="/" onEnter={_ensureLoggedIn} component={ App }>
        <IndexRoute component={PostIndexContainer}/>
        <Route path="/form" component={PostFormContainer} />
        <Route path="/logout" component={ GreetingContainer } />
        <Route path="/user" component={ UserContainer } />
        <Route path="/followers" component={ RelationshipContainer } />
      </Route>

    </Router>
  </Provider>
);
};


export default Root;
