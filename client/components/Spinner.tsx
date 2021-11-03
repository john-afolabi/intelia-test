import React from 'react';
import { Spin } from 'antd';

const Spinner = (): JSX.Element => {
  return (
    <Spin
      size="large"
      style={{
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default Spinner;
