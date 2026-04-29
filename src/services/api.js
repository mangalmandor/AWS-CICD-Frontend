import axios from 'axios';

const BASE_URL = 'http://ec2-13-49-241-148.eu-north-1.compute.amazonaws.com:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;