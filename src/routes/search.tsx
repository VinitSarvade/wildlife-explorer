import { FileRoute, Outlet, useParams } from '@tanstack/react-router';

import SearchAnimals from '@components/search-animals';
import { cn } from '@utils/cn';

export const Route = new FileRoute('/search').createRoute({
  component: Search,
});

export default function Search() {
  const { animal } = useParams({ strict: false });

  return (
    <>
      <div className="flex flex-col pt-10 bg-wild-200 md:sticky md:top-0 md:z-10 p-5">
        <div
          className={cn(
            'container transition-all duration-700',
            !animal && 'min-h-screen',
          )}
        >
          <h1 className="text-4xl text-center mb-10">Wildlife Explorer</h1>

          <SearchAnimals />
        </div>
      </div>

      <div className="bg-gradient-to-b from-wild-200 to-bg-wild-50">
        <div className="container pb-20 px-5 md:px-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}
