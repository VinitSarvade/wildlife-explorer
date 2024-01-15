import { FileRoute, Outlet } from '@tanstack/react-router';

import SearchAnimals from '@components/search-animals';

export const Route = new FileRoute('/search').createRoute({
  component: Search,
});

export default function Search() {
  return (
    <div className="container pt-10">
      <h1 className="text-4xl text-center mb-10">Wildlife Explorer</h1>

      <SearchAnimals />

      <Outlet />
    </div>
  );
}
