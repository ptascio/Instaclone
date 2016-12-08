import { RECEIVE_NEW_POST, RECEIVE_ERRORS } from '../actions/post_actions';
import merge from 'lodash/merge';

//initialState?

const initialState = {
  image: null,
  userId: null,
  errors: []
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_NEW_POST:
      return state;
    default:
      return state;
  }
};

export default postReducer;
