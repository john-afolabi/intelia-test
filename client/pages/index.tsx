import type { NextPage } from 'next';
import Head from 'next/head';
import Carlist from '../components/CarList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Intelia Car Booking App</title>
      </Head>
      <div className="container">
        <Carlist />
      </div>
    </>
  );
};

export default Home;
