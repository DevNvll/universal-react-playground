import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class NavItem extends Component {
  handleClick() {
    if(this.props.location != window.location.pathname)
      this.props.setLocation(window.location.pathname);
  }
  componentDidMount() {
    this.props.setLocation(window.location.pathname);
  }
  render() {
    const {to, icon, children, location} = this.props;
    return (
      <li onClick={this.handleClick.bind(this)} className={to === location ? 'active' : null}>
        <Link to={to}>
          <i className={icon}></i> <span>{children}</span>
        </Link>
      </li>
    );
  }
}

NavItem.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string.isRequired,
  location: PropTypes.string,
  setLocation: PropTypes.func.isRequired
}

export default NavItem;
