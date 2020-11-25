
import React from 'react';
import Button from '../shared/Button';
import FormField from '../shared/FormField';
import Checkbox from '../shared/Checkbox';
import { login } from '../../api/auth';
import T from 'prop-types';


import './LoginPage.css';

class LoginPage extends React.Component {
    state = {
        form: {
          email: localStorage.username,
          password: localStorage.password,
          
        },
        isChecked: localStorage.checkbox ,
        submitting: false,
        error: null,

      };

      componentDidMount() {
        if (localStorage.checkbox && localStorage.username !== "") {
            this.setState({
                isChecked: true,
                email: localStorage.username,
                password: localStorage.password
            })
        }
    }
    
      handleChange = event => {
        this.setState(state => ({
          form: { ...state.form, [event.target.name]: event.target.value },
        }));
      };

      onChangeCheckbox = event => {
        
        this.setState({
            isChecked: event.target.checked
        })
      }

      handleSubmit = async event => {
        const { onLogin , history } = this.props;  
        const { form: crendentials, isChecked } = this.state;
        event.preventDefault();
        this.setState({ submitting: true });
        try {
          console.log(crendentials)
          if (isChecked && crendentials.email !== "") {
            localStorage.username = crendentials.email
            localStorage.password = crendentials.password
            localStorage.checkbox = isChecked
          }
          const loggedUserId = await login(crendentials);
          this.setState({ submitting: false, error: null });
         
          onLogin(loggedUserId, () => history.push('/'));
        } catch (error) {
          this.setState({ submitting: false, error });
        }
      };

      /*componentWillUnmount() {
        console.log('componentWillUnmount');
      }*/
    
    
    
      canSubmit = () => {
        const {
          form: { email, password},
          submitting,
        } = this.state;
        return !submitting && email && password;
      };
      
  render() {
   const {
        form: { email, password },
        error,
      } = this.state;
    const {isChecked } =this.state
      
    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to Adverts</h1>
        <form onSubmit={this.handleSubmit}>
         <FormField
            type="text"
            name="email"
            label="email"
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
         
         <Checkbox type="checkbox" checked={isChecked} name="lsRememberMe" onChange={this.onChangeCheckbox} />
         <label>Remember me</label>

        
         
         <Button
            type="submit"
            className="loginPage-submit"
            variant="primary"
            disabled={!this.canSubmit()}
          >
            Log in
         </Button>
        </form>
        {error && <div className="loginPage-error">{error.message}</div>}
      </div>
    );
  }
}
LoginPage.propTypes = {
    onLogin: T.func.isRequired,
  };
  

export default LoginPage;