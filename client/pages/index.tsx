import Head from 'next/head';
import Carlist from '../components/CarList';
import { getBaseLayout } from '../layouts/base';

const Home = (): React.ReactNode => {
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

Home.getLayout = getBaseLayout;

export default Home;
