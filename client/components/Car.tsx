import React from 'react';
import { Card, Button, notification } from 'antd';
import Image from 'next/image';
import useBookCar from '../hooks/useBookCar';

type CarProps = {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
};

const { Meta } = Card;
const Car = ({ id, brand, model, year, color }: CarProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { mutateAsync: bookCar } = useBookCar();

  const onBookCar = async (carId: string) => {
    try {
      setLoading(true);
      await bookCar(carId);
      notification.success({ message: 'Booking successful' });
    } catch (error) {
      notification.error({ message: 'Booking failed' });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          alt="car"
          src="/img/jpg/car.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      }
    >
      <Meta
        title={`${brand} ${model}`}
        description={`Year: ${year} Color: ${color}`}
      />
      <Button
        type="primary"
        className="t-lg"
        block
        onClick={() => onBookCar(id)}
        loading={loading}
      >
        Book Car
      </Button>
    </Card>
  );
};

export default Car;
