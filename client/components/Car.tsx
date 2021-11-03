import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

type CarProps = {
  brand: string;
  model: string;
  year: number;
  color: string;
};

const { Meta } = Card;
const Car = ({ brand, model, year, color }: CarProps) => {
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
    </Card>
  );
};

export default Car;
