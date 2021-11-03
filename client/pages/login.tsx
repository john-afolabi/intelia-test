import type { NextPage } from 'next';
import Head from 'next/head';
import Login from '../components/Login';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Intelia Car Booking App</title>
      </Head>

      <div className="container">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
