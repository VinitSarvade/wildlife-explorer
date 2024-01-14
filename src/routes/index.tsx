import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/').createRoute({
  component: Home,
});

export default function Home() {
  return <h1 className="text-2xl">Wildlife Explorer</h1>;
}
