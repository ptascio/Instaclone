import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

window.store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<h1>Welcome To Instaclone</h1>, root);
});
