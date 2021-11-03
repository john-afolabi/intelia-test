import { initReactQueryAuth } from 'react-query-auth';

import { http, tokenStorage } from './main';

async function loadUser() {}

async function loginFn(email: string) {
  const res = await http.post('/user/login', { email });
  const { token, user } = res.data.data;
  tokenStorage.setToken(token);
  return user;
}

async function registerFn() {}

async function logoutFn() {
  tokenStorage.clearToken();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);

export { AuthProvider, useAuth };
