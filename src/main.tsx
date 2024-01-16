import React from 'react';
import ReactDOM from 'react-dom/client';

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ErrorComponent, Router, RouterProvider } from '@tanstack/react-router';

import { LoadingSpinner } from '@ui/loading-spinner';

import './index.css';
import { routeTree } from './routeTree.gen';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  },
});

const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
  defaultPendingComponent: () => (
    <div className="p-2 text-2xl flex justify-center">
      <LoadingSpinner />
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: unknown }) => (
    <ErrorComponent error={error} />
  ),
  defaultPreload: 'intent',
  // let react-query handle data caching
  defaultPreloadStaleTime: 0,
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
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <RouterProvider router={router} />
      </PersistQueryClientProvider>
    </React.StrictMode>,
  );
}
