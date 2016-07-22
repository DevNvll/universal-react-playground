import React, { Component, PropTypes } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const {authenticated, loginGithub} = this.props;
    if(authenticated) {
      this.props.changeLocationAfterLogin(this.props.params.next);
    }
    return (
      	<div className="page">
        <section className="content-header">
          <h1>
            Login
            <small>Login to our application</small>
          </h1>
        </section>
        <section className="content">
          <h4>You will be redirected to /{this.props.params.next}</h4><br />
          <button onClick={loginGithub.bind(this)} className="btn">Login with Github</button>
        </section>
		</div>
    );
  }
}

Login.propTypes = {
  logout: PropTypes.func.isRequired,
  changeLocationAfterLogin: PropTypes.func.isRequired,
  loginGithub: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
}

export default Login;
