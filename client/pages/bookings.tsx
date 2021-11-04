import Head from 'next/head';
import { getBaseLayout } from '../layouts/base';
import Bookings from '../components/BookingsList';

const BookingsPage = (): React.ReactNode => {
  return (
    <>
      <Head>
        <title>Bookings | Intelia Car Booking App</title>
      </Head>

      <div className="container">
        <Bookings />
      </div>
    </>
  );
};

BookingsPage.getLayout = getBaseLayout;

export default BookingsPage;
