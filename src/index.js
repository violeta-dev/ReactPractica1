import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import storage from './utils/storage';
import { configureClient } from './api/client';

import './index.css';

const auth = storage.get('auth') || { id: null, accessToken: null };

configureClient(auth.accessToken);

ReactDOM.render(
  <App initiallyLooggedUserId={auth.id} />,
  document.getElementById('root')
);
