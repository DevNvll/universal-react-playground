import { createStore, applyMiddleware, compose } from 'redux';
import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';
import createLogger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';
import rootReducer from '../reducers';

const middlewareBuilder = () => {

  let middleware = {};
  let universalMiddleware = [thunk,promiseMiddleware];
  let allComposeElements = [];

  if(process.browser){
    if(ENV === 'production' || ENV === 'test'){
      middleware = applyMiddleware(...universalMiddleware);
      allComposeElements = [
        middleware,
        reduxReactRouter({
          createHistory
        })
      ]
    }else{
      console.log("%cDEVELOPMENT MODE", "font: 2em sans-serif; color: white; background-color: grey;");
      middleware = applyMiddleware(...universalMiddleware, createLogger());
      allComposeElements = [
        middleware,
        reduxReactRouter({
          createHistory
        })
      ]
    }
  }else{
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [
      middleware
    ]
  }

  return allComposeElements;

}

const finalCreateStore = compose(...middlewareBuilder())(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
