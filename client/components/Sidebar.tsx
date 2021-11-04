import React from 'react';
import { Menu, Layout, Avatar, Row, Button, notification } from 'antd';
import {
  UserOutlined,
  OrderedListOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (arg: boolean) => void;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps): JSX.Element => {
  const router = useRouter();
  const { user, logout, isLoggingOut } = useAuth();
  const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

  const onLogout = () => {
    logout();
    notification.success({ message: 'Logout successful' });
    router.push({
      pathname: '/',
    });
  };

  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      {!collapsed && (
        <>
          <Row align="middle" className="l-md h-xl">
            <Avatar size={64} icon={<UserOutlined />} />
            <span className="l-md">{user?.name}</span>
          </Row>
        </>
      )}

      <Menu theme="light" mode="inline">
        <Menu.Item key="1" icon={<OrderedListOutlined />}>
          <Link href="/">
            <a>Cars List</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckSquareOutlined />}>
          <Link href="/bookings">
            <a>My Bookings</a>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="3"
          style={{
            position: 'absolute',
            bottom: 50,
            zIndex: 1,
            transition: 'all 0.2s',
          }}
        >
          <Button onClick={() => onLogout()} loading={isLoggingOut}>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
