import React from 'react';
import classNames from 'classnames';
import Logo from '../shared/Photo';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import { logout } from '../../api/auth';
import { AuthContext } from '../App/App';


import Icon from '../adverts/images/anuncios/iphone.png';
import './Header.css';

const Header = ({ className, isLogged, onLogout, ...props }) => (
  <header className={classNames('header', className)} {...props}>
    <div className="header-logo">
      <Logo src={Icon}/>   
      
    </div>
    <nav className="header-nav">
    <Button as={Link} to="/advert" variant="primary" className="header-button">
        Advert
      </Button>
      {isLogged ? (
        <Button
          className="header-button"
          onClick={() => logout().then(onLogout)}
        >
          Log out
        </Button>
      ) : (
        <Button as={Link} to="/login" className="header-button">
          Login
        </Button>
      )}


    </nav>
  </header>
);

const ConnectedToAuthHeader = props => (
    <AuthContext.Consumer>
      {({ isLogged, onLogout }) => (
        <Header {...props} isLogged={isLogged} onLogout={onLogout} />
      )}
    </AuthContext.Consumer>
  );
  
  export default ConnectedToAuthHeader;
  