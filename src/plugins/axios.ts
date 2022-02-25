import axios from 'axios';

export const API_KEY = '099148be22804e849a0c6fe022b7cf5e';
export const $axios = axios.create({
  baseURL: 'https://newsapi.org/v2',
});
