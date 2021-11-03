import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const http = axios.create({
  baseURL: baseURL,
  timeout: 50000,
});

export const tokenStorage = {
  get: () => {
    const token = window.localStorage.getItem('token');
    if (token) return JSON.parse(token);
    return;
  },
  set: (token: string) =>
    window.localStorage.setItem('token', JSON.stringify(token)),
  clear: () => window.localStorage.removeItem('token'),
};

http.interceptors.request.use(function (config) {
  const token = tokenStorage.get();
  //@ts-ignore
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
