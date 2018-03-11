import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

import UserAuthForm from '../../containers/Header/UserAuthForm';
import UserOwnerWalletForm from '../../containers/Header/UserOwnerWalletForm';

/**
 * Nav component
 * @class
 * @extends React.Component
 */
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCollapse: true,
    };

    this.toggleNavbarContent = this.toggleNavbarContent.bind(this);
  }

  /**
   * Collapse when we are on a new page
   * @param {object} nextProps 
   */
  componentWillReceiveProps(nextProps) {
    if(this.props.pageUrl !== nextProps.pageUrl) {
      this.setState({ isCollapse: true });
    }
  }

  /**
   * Toggle the navbar content
   * @method
   * @param {Proxy} event 
   */
  toggleNavbarContent(event) {
    event.preventDefault();
    this.setState({ isCollapse: !this.state.isCollapse });
  }

  render() {
    const { pageUrl } = this.props;
    const { isCollapse } = this.state;
    return (
      <nav id="Nav" className="container navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand font-weight-bold text-lg-center text-primary"
          to="/">
          {'GSCOIN'}
          <MaterialDesign.MdAttachMoney />
        </Link>
        <button className="navbar-toggler" onClick={this.toggleNavbarContent}
          type="button" data-toggle="collapse"
          data-target="#navbarContent" aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse ${isCollapse ? 'collapse' : ''}`} id="navbarContent">
          <ul className="navbar-nav">
            <li className={`nav-item ${pageUrl === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">{'Home'}</Link>
            </li>
            <li className={`nav-item ${pageUrl.startsWith('/wallets') ? 'active' : ''}`}>
              <Link className="nav-link" to="/wallets">{'Wallets'}</Link>
            </li>
            <li className={`nav-item ${pageUrl.startsWith('/transactions') ? 'active' : ''}`}>
              <Link className="nav-link" to="/transactions">{'Transactions'}</Link>
            </li>
            <li className={`nav-item ${pageUrl.startsWith('/about') ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">{'About'}</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <UserOwnerWalletForm />
            <UserAuthForm />
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  pageUrl: PropTypes.string.isRequired,
};

export default Nav;
