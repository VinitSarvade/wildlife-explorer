import { useCallback } from 'react';

import { useMutation } from '@tanstack/react-query';
import { FileRoute, useNavigate } from '@tanstack/react-router';
import { ListCollapse, MapPinned, Shapes } from 'lucide-react';

import DetailsGridSection from '@components/details-grid-section';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@ui/dialog';

import { Animal } from '../../../types/animal';

export const Route = new FileRoute('/search/$animal/$name/details').createRoute(
  {
    component: AnimalDetails,
    loader: ({ context: { queryClient }, params: { animal, name } }) => {
      const animals = queryClient.getQueryData<Animal[]>(['search', animal]);
      return (
        animals &&
        animals.find((animal) => animal.name === decodeURIComponent(name))
      );
    },
  },
);

export default function AnimalDetails() {
  const navigate = useNavigate();
  const animal = Route.useLoaderData();
  const { queryClient } = Route.useRouteContext();
  const { animal: searchAnimal } = Route.useParams();

  const { mutate } = useMutation({
    mutationFn: ({
      type,
      key,
      action,
    }: {
      type: 'taxonomy' | 'characteristic';
      key: string;
      action: -1 | 1;
    }) => {
      const animals = queryClient.getQueryData<Animal[]>([
        'search',
        searchAnimal,
      ]);
      const newAnimals = animals!.map((dataAnimal) => {
        if (dataAnimal.name === animal!.name) {
          dataAnimal[`${type}_key_preferences`] = {
            ...dataAnimal[`${type}_key_preferences`],
            [key]: action,
          };
        }
        return dataAnimal;
      });
      return Promise.resolve(
        queryClient.setQueryData(['search', searchAnimal], newAnimals),
      );
    },
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const handleClose = useCallback(() => {
    navigate({ to: '../..', replace: true });
  }, [navigate]);

  const handleKeyPreferenceClick = useCallback(
    (type: 'taxonomy' | 'characteristic') =>
      (key: string) =>
      (action: -1 | 1) => {
        mutate({ type, key, action });
      },
    [mutate],
  );

  if (!animal) {
    return null;
  }

  const { scientific_name, ...taxonomyWoScientificName } = animal.taxonomy;

  return (
    <Dialog open>
      <DialogContent
        className="md:max-w-4xl lg:max-w-5xl max-h-full overflow-y-auto pt-10"
        onClose={handleClose}
      >
        <DialogHeader>
          <DialogTitle className="text-left md:text-center">
            {animal.name}
          </DialogTitle>
          <DialogDescription className="mt-10 flex items-center gap-3 text-left md:justify-center">
            <MapPinned size={24} />
            {animal.locations.join(', ')}
          </DialogDescription>
        </DialogHeader>

        <div className="py-2">
          <span className="font-semibold">Scientific Name:&nbsp;</span>
          <span>{scientific_name}</span>
        </div>

        <DetailsGridSection
          titleIcon={<Shapes />}
          title="Taxonomy"
          entries={Object.entries(taxonomyWoScientificName)}
          onKeyPreferenceClick={handleKeyPreferenceClick('taxonomy')}
          keyPreferences={animal.taxonomy_key_preferences}
        />

        <DetailsGridSection
          title="Characteristics"
          titleIcon={<ListCollapse />}
          entries={Object.entries(animal.characteristics)}
          onKeyPreferenceClick={handleKeyPreferenceClick('characteristic')}
          keyPreferences={animal.characteristic_key_preferences}
        />
      </DialogContent>
    </Dialog>
  );
}
