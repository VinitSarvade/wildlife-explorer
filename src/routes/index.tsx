import { FileRoute, Navigate } from '@tanstack/react-router';

export const Route = new FileRoute('/').createRoute({
  component: Root,
});

export default function Root() {
  return <Navigate to="/search" />;
}
