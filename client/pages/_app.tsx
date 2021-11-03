import React from 'react';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '../utils/auth';
import { RouteGuard } from '../components/RouteGuard';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          {/* @ts-ignore */}
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </AuthProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
