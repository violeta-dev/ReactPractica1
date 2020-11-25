import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../App/App';
//import { AuthContextConsumer } from './context';

const PrivateRoute = ({ isLogged, ...props }) =>
  isLogged ? <Route {...props} /> : <Redirect to="/login" />;

  export const ConnectedToAuthHeaderPrivateRoute = props => (
    <AuthContext.Consumer>
      {value => <PrivateRoute {...props} isLogged={value.isLogged} />}
    </AuthContext.Consumer>
  );
  
  export default ConnectedToAuthHeaderPrivateRoute;
  