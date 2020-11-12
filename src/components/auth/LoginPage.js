import React from 'react';
import T from 'prop-types';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import './LoginPage.css';

class LoginPage extends React.Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  handleChange = event => {
    this.setState(state => ({
      form: { ...state.form, [event.target.name]: event.target.value },
    }));
  };

  canSubmit = () => {
    const {
      form: { email, password },
    } = this.state;
    return email && password;
  };

  render() {
    const {
      form: { email, password },
    } = this.state;

    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to Twitter</h1>
        <form>
          <FormField
            type="text"
            name="email"
            label="phone, email or username"
            className="loginPage-field"
            value={email}
            onChange={this.handleChange}
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="loginPage-field"
            value={password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="loginPage-submit"
            variant="primary"
            disabled={!this.canSubmit()}
          >
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
