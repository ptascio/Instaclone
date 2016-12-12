import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchPosts } from './actions/post_actions';
import { fetchFollowers } from './actions/relationship_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, following: window.following } };
    store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store } />, root);
});
