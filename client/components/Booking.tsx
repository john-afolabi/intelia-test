import React from 'react';
import { Card } from 'antd';
import { Car } from '../hooks/useCars';

type BookingProps = {
  createdAt: string;
  isActive: boolean;
  car: Car;
};

const { Meta } = Card;
const Booking = ({ createdAt, car }: BookingProps) => {
  const bookingTimestamp = new Date(createdAt);
  const bookingDate = bookingTimestamp.toLocaleDateString();
  const bookingTime = bookingTimestamp.toLocaleTimeString();

  return (
    <Card style={{ width: 300 }}>
      <Meta
        title={`${car.brand} ${car.model}`}
        description={
          <>
            <span>Date: {bookingDate}</span>
            <br />
            <span>Time: {bookingTime}</span>
          </>
        }
      />
    </Card>
  );
};

export default Booking;
