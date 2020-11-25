
import React from 'react';
import ReactDOM from 'react-dom';
import storage from './utils/storage';
import './index.css';
import App from './components/App';
import { configureClient } from './api/client';
import { BrowserRouter } from 'react-router-dom';


const auth = storage.get('auth') || { id: null, accessToken: null };
//cliente axios configurado con el token
configureClient(auth.accessToken);


ReactDOM.render(
    <BrowserRouter>
     <App initiallyLooggedUserId={auth.id} />
  </BrowserRouter>, document.getElementById('root'));