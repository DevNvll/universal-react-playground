import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth';
import firebase from '../api/firebase';

import Home from '../components/Home'
import Header from '../components/layout/Header'
import Sidebar from './layout/Sidebar'


class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let authenticated = false;
    for (let key in localStorage) {
      if(key.startsWith("firebase:authUser:")) {
        authenticated = true;
        this.props.authUser(JSON.parse(localStorage[key]));
      }
    }
  }

  render() {

    return (
      <div className="wrapper">
        <Sidebar user={this.props.auth.authenticated ? this.props.auth : null} />
        <div className="content-wrapper">
          {!this.props.children && <Home />}
          {this.props.children}
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
