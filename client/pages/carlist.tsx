import type { NextPage } from 'next';
import Head from 'next/head';
import Car from '../components/Car';
import useCars from '../hooks/useCars';
import styles from '../styles/Home.module.css';
import { Typography, Row, Col } from 'antd';
import { useAuth } from '../utils/auth';

const { Title } = Typography;

const Carlist: NextPage = () => {
  const { data: cars, isLoading } = useCars();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Car List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title level={1}>Car List</Title>
        <Row align="middle" justify="center" gutter={32}>
          {cars?.map(({ id, brand, color, model, year }) => {
            return (
              <Col key={id}>
                <Car brand={brand} color={color} model={model} year={year} />
              </Col>
            );
          })}
        </Row>
      </main>
    </div>
  );
};

export default Carlist;
