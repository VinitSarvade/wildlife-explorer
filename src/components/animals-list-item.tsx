import { Beef, LeafyGreen, MapPinned } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';

import { Animal, DietType } from '../types/animal';

interface AnimalListItemProps {
  animal: Animal;
}

const IconMap = {
  [DietType.Herbivore]: () => (
    <span className="text-wild-400" title={DietType.Herbivore}>
      <LeafyGreen size={16} />
    </span>
  ),
  [DietType.Carnivore]: () => (
    <span className="text-red-400" title={DietType.Carnivore}>
      <Beef size={16} />
    </span>
  ),
  [DietType.Omnivore]: () => [
    IconMap[DietType.Herbivore](),
    IconMap[DietType.Carnivore](),
  ],
};

export default function AnimalsListItem({ animal }: AnimalListItemProps) {
  return (
    <Card key={animal.name.replace(/\s/g, '-')}>
      <CardHeader className="relative">
        <CardTitle>{animal.name}</CardTitle>

        {!!animal.taxonomy.scientific_name && (
          <CardDescription className="text-wild-700">
            <span title={`Family: ${animal.taxonomy.family}`}>
              {animal.taxonomy.family}
            </span>
            &nbsp;&middot;&nbsp;
            <span title={`Scientific Name: ${animal.taxonomy.scientific_name}`}>
              {animal.taxonomy.scientific_name}
            </span>
          </CardDescription>
        )}

        <div className="absolute top-0 right-2 flex gap-1">
          {IconMap[animal.characteristics.diet]()}
        </div>
      </CardHeader>

      <CardFooter className="italic text-sm gap-2">
        <MapPinned size={24} />
        {animal.locations.join(', ')}
      </CardFooter>
    </Card>
  );
}
