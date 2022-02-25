import axios from 'axios';

export const API_KEY = '099148be22804e849a0c6fe022b7cf5e';
export const $axios = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

// Add a response interceptor
$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error ja');
    Promise.reject(error);
  },
);
