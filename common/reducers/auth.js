import firebase from '../api/firebase';
import * as authActions from '../actions/auth';
import {USER_AUTHENTICATED, USER_LOGOUT, LOGIN_GITHUB} from '../constants/ActionTypes';

let initialState = {
  authenticated: false
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case USER_AUTHENTICATED:
      return Object.assign({}, state, {authenticated: true, ...action.user});
    case USER_LOGOUT:
      state = {};
      firebase.auth().signOut();
      return Object.assign({}, state, {authenticated: false});
    case LOGIN_GITHUB:
      return state;
    default:
      return state;
  }
}
