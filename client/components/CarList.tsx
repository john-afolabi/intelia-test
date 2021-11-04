import React from 'react';
import Car from '../components/Car';
import useCars, { Car as CarType } from '../hooks/useCars';
import { Typography, Row, Col, Input } from 'antd';
import Spinner from './Spinner';

const { Title } = Typography;

const { Search } = Input;

const Carlist = () => {
  const { data: cars, isLoading } = useCars();
  const [filteredCars, setFilteredCars] = React.useState<CarType[]>([]);

  const onSearch = (value: string | number) => {
    const filtered = cars?.filter(({ model }) =>
      model.toLocaleLowerCase().includes(value.toString().toLocaleLowerCase())
    );
    //@ts-ignore
    setFilteredCars(filtered);
  };

  React.useEffect(() => {
    //@ts-ignore
    if (!isLoading) setFilteredCars(cars);
  }, [isLoading, cars]);

  return (
    <main className="main">
      <Title level={1}>Car List</Title>

      <Search
        placeholder="Search cars"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
      <div className="t-xl">
        <Row align="middle" justify="center" gutter={[32, 32]}>
          {isLoading ? (
            <Spinner />
          ) : filteredCars.length ? (
            filteredCars?.map(({ id, brand, color, model, year }) => {
              return (
                <Col key={id}>
                  <Car
                    id={id}
                    brand={brand}
                    color={color}
                    model={model}
                    year={year}
                  />
                </Col>
              );
            })
          ) : (
            <p>There are no cars</p>
          )}
        </Row>
      </div>
    </main>
  );
};

export default Carlist;
