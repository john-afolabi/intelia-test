import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';

const Login = (): React.ReactElement => {
  const { user, isLoggingIn, login } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) router.push('/');
  }, []);

  const onFinish = async ({ email }: { email: string }) => {
    try {
      await login(email);
      notification.success({ message: 'Login successful' });
      const returnUrl = router.query.returnUrl || '/';
      // @ts-ignore
      router.push(returnUrl);
    } catch (err) {
      notification.error({
        message: 'Login failed',
        // @ts-ignore
        description: err.response.data.message,
      });
    }
  };

  return (
    <main className="main">
      <Form name="login" onFinish={onFinish} style={{ width: '400px' }}>
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
            type="email"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isLoggingIn}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default Login;
