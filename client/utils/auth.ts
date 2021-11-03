import { initReactQueryAuth } from 'react-query-auth';

import { http, tokenStorage } from './main';

async function loadUser() {
  let user = null;

  if (tokenStorage.get()) {
    const res = await http.get('/user');
    user = res.data.data;
  }

  return user;
}

async function loginFn(email: string) {
  const res = await http.post('/user/login', { email });
  const { token, user } = res.data.data;
  tokenStorage.set(token);
  return user;
}

async function registerFn() {}

async function logoutFn() {
  tokenStorage.clear();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);

export { AuthProvider, useAuth };
