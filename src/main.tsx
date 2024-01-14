import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorComponent, Router, RouterProvider } from '@tanstack/react-router';

import { LoadingSpinner } from '@ui/loading-spinner';

import './index.css';
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <LoadingSpinner />
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: unknown }) => (
    <ErrorComponent error={error} />
  ),
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0, // let react-query handle data caching
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
