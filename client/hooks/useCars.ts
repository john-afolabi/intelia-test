import { useQuery, UseQueryResult } from 'react-query';
import { http } from '../utils/main';
import { notification } from 'antd';

export type Car = {
  id: string;
  color: string;
  brand: string;
  model: string;
  year: number;
};

const fetchCars = async () => {
  const res = await http.get('/car').catch((err) => {
    console.log(err);
    notification.error({ message: 'Error fetching cars' });
  });
  return res?.data?.data?.cars;
};

export default function useCars(): UseQueryResult<Car[]> {
  return useQuery(['cars'], () => fetchCars(), {
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
}
