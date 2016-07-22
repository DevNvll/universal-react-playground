import { push } from 'redux-router';
import {USER_AUTHENTICATED, USER_LOGOUT} from '../constants/ActionTypes';

export function authUser(user) {
  return {
    type: USER_AUTHENTICATED,
    user
  }
}

export function logout() {
  return {
    type: USER_LOGOUT
  }
}

export function loginGithub() {
  return (dispatch) => {
    let provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then((result) => {
      dispatch(authUser(result.user));
    });
  }
}

export function changeLocationAfterLogin(nextPath) {
  return (dispatch) => {
    dispatch(push(nextPath));
  }
}
