import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar';

const BaseLayoutWithSidebar: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ marginLeft: `${collapsed ? '80px' : '200px'}` }}>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export const getBaseLayout = (page: ReactNode): ReactNode => (
  <BaseLayoutWithSidebar>{page}</BaseLayoutWithSidebar>
);
