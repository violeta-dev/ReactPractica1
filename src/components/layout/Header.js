import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';

const Header = ({ className, isLogged, onLogout, ...props }) => (
  <header className={classNames('header', className)} {...props}>
    <div className="header-logo">
      <Icon width="32" height="32" />
    </div>
    <nav className="header-nav"></nav>
  </header>
);

export default Header;
