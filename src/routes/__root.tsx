import { QueryClient } from '@tanstack/react-query';
import { Outlet, rootRouteWithContext } from '@tanstack/react-router';

export const Route = rootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="min-h-dvh">
      <Outlet />
    </main>
  );
}
