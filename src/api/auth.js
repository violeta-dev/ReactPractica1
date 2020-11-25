import client from './client';

import storage from '../utils/storage';

// retorno el id del usuario auth.user y lo almaceno para saber que le usuario está logueado
export const login = crendentials =>
  client.login(crendentials).then(auth => {
    const id = auth.user
    const accessToken = auth.token
    storage.set('auth', { id, accessToken });
    return auth.user;
  });

export const logout = () =>
  client.logout().then(() => {
    storage.remove('auth');
  });
