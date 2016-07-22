import request from 'axios';
import {REPOS_GET, REPO_SELECTED} from '../constants/ActionTypes';

export function fetchRepos(user) {
  return {
    type: REPOS_GET,
    promise: request.get(`https://api.github.com/user/${user}/repos`)
  }
}

export function selectRepo(repo) {
  return {
    type: REPO_SELECTED,
    payload: repo
  }
}
