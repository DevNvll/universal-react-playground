import React, { Component, PropTypes } from 'react';
import Header from './Header';
import NavItem from '../../containers/layout/NavItem';

class Sidebar extends Component {
  constructor(props){
	super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {user, logout, loginGithub, counter} = this.props;
    return (
      <div>
      <Header />
      <aside className="main-sidebar">
        <section className="sidebar">

          {user && (
            <div className="user-panel">
            <div className="pull-left image">
              <img src={user.photoURL} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>{user.displayName}</p>
              <a href="#"><button onClick={logout} className="btn btn-xs btn-danger">Logout</button></a><br /><br />
            </div>
            </div>
          ) || (
            <div className="user-panel">
              <center>
                <div>
                  <button className="btn" onClick={loginGithub}><i className="fa fa-github"></i> Login with GitHub</button>
                </div>
              </center>
            </div>
          )}

          <form onSubmit={this.handleSubmit} className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>

          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <NavItem to="/" icon="fa fa-home">Home</NavItem>
            <NavItem to="/repos" icon="fa fa-github">Repositories</NavItem>
            <NavItem to="/counter" icon="fa fa-plus">Counter <span className="label label-primary pull-right">{counter}</span></NavItem>
            <NavItem to="/404" icon="fa fa-plus">404</NavItem>
          </ul>

        </section>
      </aside>
      </div>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  loginGithub: PropTypes.func.isRequired
}

export default Sidebar;
