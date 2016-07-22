import {REPOS_GET_REQUEST, REPOS_GET_SUCCESS, REPOS_GET_FAILURE, REPO_SELECTED} from '../constants/ActionTypes';

var initial = {
  isFetching: true,
  error: {},
  results: [],
  selected: {}
}

export default function reposUser(state = initial, action) {
  switch(action.type) {
    case REPOS_GET_REQUEST:
      return Object.assign({}, state, {isFetching: true});
    case REPOS_GET_SUCCESS:
      let data = [];
      if(action.req && action.req.data){
        data = action.req.data.sort((a,b) => {
          return new Date(b.pushed_at) - new Date(a.pushed_at);
        });
      }
      return Object.assign({}, state, {
        isFetching: false,
        results: data,
        lastUpdated: new Date(),
        selected: {}
      });
    case REPOS_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error : {
          status: action.error.status,
          statusText : action.error.statusText
        }
      });
    case REPO_SELECTED:
      return Object.assign({}, state, {
        selected: action.payload
      });
    default:
    return state;
  }
}
