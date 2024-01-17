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
      <div className="pt-10 bg-wild-200 md:sticky md:top-0 md:z-10 p-5 bg-[url('/silhouette.jpg')] bg-blend-soft-light bg-cover bg-top">
        <div
          className={cn(
            'flex flex-col container transition-all duration-700',
            !animal && 'min-h-[calc(100vh-3.75rem)]',
          )}
        >
          <h1 className="text-4xl font-semibold text-center mb-10">
            Wildlife Explorer
          </h1>

          <SearchAnimals />

          {!animal && (
            <div className="flex-1 w-full mx-auto mt-10 flex justify-center">
              <h1 className="mt-20 max-w-xl text-center text-lg text-wild-900">
                Search for an animal or choose from the top searches to get
                started!
              </h1>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-b from-wild-200 to-bg-wild-50">
        <div className={cn('container px-5 md:px-20', animal && 'pb-20')}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
