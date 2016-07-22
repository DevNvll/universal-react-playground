import React, { Component, PropTypes } from 'react';
import { Nav } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
            <header className="main-header">
              <a href="index2.html" className="logo">
                <span className="logo-mini"><b>0x</b>48</span>
                <span className="logo-lg"><b>0x</b>48</span>
              </a>
              <Nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                  <span className="sr-only">Toggle navigation</span>
                </a>
              </Nav>
            </header>
    );
  }
}

export default Header;
