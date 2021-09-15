import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-fcamara.herokuapp.com/api',
});

export default api;
