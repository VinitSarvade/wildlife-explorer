import { FileRoute, Outlet } from '@tanstack/react-router';

import AnimalsList from '@components/animals-list';
import { API } from '@utils/api';

import { Animal } from '../../types/animal';

export const Route = new FileRoute('/search/$animal').createRoute({
  component: SearchResults,
  loader: ({ context: { queryClient }, params: { animal } }) =>
    queryClient.ensureQueryData<Animal[]>({
      queryKey: ['search', animal],
      queryFn: () => API({ name: animal }),
    }),
});

export default function SearchResults() {
  const animals = Route.useLoaderData();
  const { animal } = Route.useParams();

  return (
    <>
      <h2 className="text-2xl mb-5 capitalize">{animal}s</h2>

      <AnimalsList animals={animals} />

      <Outlet />
    </>
  );
}
