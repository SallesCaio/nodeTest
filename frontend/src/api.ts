import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nodetest-cbwh.onrender.com/',
});
