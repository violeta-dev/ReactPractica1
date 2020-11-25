import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

const client = axios.create({
  baseURL,
});


const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };
  
  const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
  };
  
  client.login = credentials =>
    client.post('/apiv1/auth/login', credentials).then(auth => {
      setAuthorizationHeader(auth.token);
      return auth;
    });
 // Logout method
client.logout = () =>
new Promise(resolve => {
  // Remove Authorization header
  removeAuthorizationHeader();
  resolve();
});

  // En axios puedo poner  interceptors de la respuesta de la api
  client.interceptors.response.use(
    response => response.data,
    error => {
      console.log(error);
      if (!error.response) {
        return Promise.reject({ message: error.message });
      }
      return Promise.reject({
        message: error.response.statusText,
        ...error.response.data,
  
      });
    }
  );
  // si tengo access token lo meto en la petición del cliente
  export const configureClient = accessToken => {
    if (accessToken) {
      setAuthorizationHeader(accessToken);
    }
  };
  
  
export default client;