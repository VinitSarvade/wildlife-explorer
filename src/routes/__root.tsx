import { Outlet, RootRoute } from '@tanstack/react-router';

export const Route = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="min-h-dvh">
      <Outlet />
    </main>
  );
}
