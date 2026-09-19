import axios from 'axios';

// Configuración base de Axios para consumir la API de JSONPlaceholder
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Interceptor para registrar errores en consola (útil en desarrollo)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la petición Axios:', error.message);
    return Promise.reject(error);
  }
);

export default apiClient;