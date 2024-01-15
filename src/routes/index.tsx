import { FileRoute } from '@tanstack/react-router';

import SearchAnimals from '@components/search-animals';

export const Route = new FileRoute('/').createRoute({
  component: Home,
});

export default function Home() {
  return (
    <div className="container pt-10">
      <h1 className="text-4xl text-center mb-10">Wildlife Explorer</h1>

      <SearchAnimals />
    </div>
  );
}
