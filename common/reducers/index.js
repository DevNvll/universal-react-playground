import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import counter from './counter';
import repos from './repos';
import auth from './auth';
import location from './location';

const rootReducer = combineReducers({
  counter : counter,
  repos : repos,
  auth : auth,
  location: location,
  router : routerStateReducer
});

export default rootReducer;
