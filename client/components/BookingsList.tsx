import React from 'react';
import { Typography, Row, Col } from 'antd';
import Spinner from './Spinner';
import useBookings from '../hooks/useBookings';
import Booking from './Booking';

const { Title } = Typography;

const Bookings = () => {
  const { data: bookings, isLoading, isRefetching } = useBookings();

  return (
    <main className="main">
      <Title level={1}>Bookings List</Title>

      <div className="t-xl">
        <Row align="middle" justify="center" gutter={[32, 32]}>
          {isLoading || isRefetching ? (
            <Spinner />
          ) : bookings?.length ? (
            bookings?.map(({ id, isActive, createdAt, car }) => {
              return (
                <Col key={id}>
                  <Booking
                    createdAt={createdAt}
                    isActive={isActive}
                    car={car}
                  />
                </Col>
              );
            })
          ) : (
            <p>You have no bookings</p>
          )}
        </Row>
      </div>
    </main>
  );
};

export default Bookings;
