import { useMutation } from 'react-query';
import { http } from '../utils/main';

const bookCar = async (carId: string) => {
  await http.post(`/car/book/${carId}`);
};

export default function useBookCar() {
  return useMutation(bookCar, {
    onSuccess: () => {},
  });
}
