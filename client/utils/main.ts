import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const http = axios.create({
  baseURL: baseURL,
  timeout: 50000,
});

export const tokenStorage = {
  getToken: () => {
    const token = window.localStorage.getItem('token');
    if (token) return JSON.parse(token);
    return;
  },
  setToken: (token: string) =>
    window.localStorage.setItem('token', JSON.stringify(token)),
  clearToken: () => window.localStorage.removeItem('token'),
};
