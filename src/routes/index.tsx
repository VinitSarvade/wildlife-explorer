import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/').createRoute({
  component: Home,
});

export default function Home() {
  return <h1 className="text-4xl text-center mt-10">Wildlife Explorer</h1>;
}
