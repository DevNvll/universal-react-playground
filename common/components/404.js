import React, { Component } from 'react';
import { Link } from 'react-router';

class Error404 extends Component {

  render() {
    return (
      	<div className="page">
        <section className="content-header">
          <h1>
            Error 404
            <small>Page not found</small>
          </h1>
        </section>
        <section className="content">
  	  		<p className="lead">Sorry, we've misplaced that URL or it's pointing to something that does not exist.</p>
  			  <p><Link to="/" className="sidebar-nav-item" activeClassName="active">&gt; Head back home</Link></p>
        </section>
		</div>
    );
  }
}

export default Error404;
