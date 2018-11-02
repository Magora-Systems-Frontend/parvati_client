import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CLIENT_PAGES } from '../../../app/constants';
import './index.styl';

/* eslint-disable react/prefer-stateless-function */
export default class Header extends React.Component {
  static propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };

  render() {
    const { toggleSidebar } = this.props;
    return (
      <header className="main-header header">
        <Link to={CLIENT_PAGES.HOME} className="logo">
          <span className="logo-name logo-lg">Parvati</span>
          <span className="logo-name logo-mini">
            <b>P</b>
          </span>
        </Link>
        <nav className="navbar navbar-static-top">
          <button
            className="sidebar-toggle"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div className="navbar-custom-menu" />
        </nav>
      </header>
    );
  }
}
