import React from 'react';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '../utils/auth';
import { RouteGuard } from '../components/RouteGuard';

type AppComponentType = AppProps['Component'] & {
  getLayout?: (a: React.ReactNode) => React.ReactNode;
};

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: AppComponentType }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout =
    Component.getLayout ?? ((page: React.ReactNode): React.ReactNode => page);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          {/* @ts-ignore */}
          <RouteGuard>{getLayout(<Component {...pageProps} />)}</RouteGuard>
        </AuthProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
