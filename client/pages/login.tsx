import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../utils/auth';

const Home: NextPage = () => {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onFinish = async ({ email }: { email: string }) => {
    try {
      setLoading(true);
      await login(email);
      notification.success({ message: 'Login successful' });
    } catch (err) {
      notification.error({
        message: 'Login failed',
        // @ts-ignore
        description: err.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: '400px' }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                message: 'Please input your email!',
                type: 'email',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default Home;