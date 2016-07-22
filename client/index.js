import 'babel-polyfill';

import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import {render} from 'react-dom';

import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

import "./assets/styles/index.css";
import "./assets/js/app.js";



const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <ReduxRouter>
      <Router children={routes} history={history} />
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
