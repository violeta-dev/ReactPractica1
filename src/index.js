import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import storage from './utils/storage';
import { configureClient } from './api/client';

import './index.css';

const auth = storage.get('auth') || { id: null, accessToken: null };

configureClient(auth.accessToken);

ReactDOM.render(
  <BrowserRouter>
    <App initiallyLooggedUserId={auth.id} />
  </BrowserRouter>,
  document.getElementById('root')
);
