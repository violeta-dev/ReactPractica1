import React from 'react';
import T from 'prop-types';

import Button from '../shared/Button';

import './LoginPage.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to Twitter</h1>
        <form>
          <input type="text" />
          <input type="password" />
          <Button
            type="submit"
            className="loginPage-submit"
            variant="primary"
            // disabled
          >
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
