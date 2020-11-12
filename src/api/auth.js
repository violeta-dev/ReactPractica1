import client from './client';

export const login = crendentials =>
  client.login(crendentials).then(auth => auth.id);
