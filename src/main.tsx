import React from 'react';
import ReactDOM from 'react-dom/client';

import { ErrorComponent, Router, RouterProvider } from '@tanstack/react-router';

import { LoadingSpinner } from '@ui/loading-spinner';

import './index.css';
import { routeTree } from './routeTree.gen';

const router = new Router({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <LoadingSpinner />
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: unknown }) => (
    <ErrorComponent error={error} />
  ),
  defaultPreload: 'intent',
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
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
