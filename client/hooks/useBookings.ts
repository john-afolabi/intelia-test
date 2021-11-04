import { useQuery, UseQueryResult } from 'react-query';
import { http } from '../utils/main';
import { notification } from 'antd';
import { Car } from './useCars';

type Booking = {
  id: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  car: Car;
};

const fetchBookings = async () => {
  const res = await http.get('/user/booking').catch((err) => {
    console.log(err);
    notification.error({ message: 'Error fetching bookings' });
  });
  return res?.data?.data?.bookings;
};

export default function useBookings(): UseQueryResult<Booking[]> {
  return useQuery(['bookings'], () => fetchBookings(), {
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
}
