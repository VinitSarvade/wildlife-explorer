import {
  Beef,
  LeafyGreen,
  MapPinned,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { countLikesAndDislikes } from '@utils/like-dislike-count';

import { Animal, DietType } from '../types/animal';

interface AnimalListItemProps {
  animal: Animal;
}

const IconMap = {
  [DietType.Herbivore]: () => (
    <span
      key={DietType.Herbivore}
      className="text-wild-400"
      title={DietType.Herbivore}
    >
      <LeafyGreen size={16} />
    </span>
  ),
  [DietType.Carnivore]: () => (
    <span
      key={DietType.Carnivore}
      className="text-red-400"
      title={DietType.Carnivore}
    >
      <Beef size={16} />
    </span>
  ),
  [DietType.Omnivore]: () => [
    IconMap[DietType.Herbivore](),
    IconMap[DietType.Carnivore](),
  ],
};

export default function AnimalsListItem({ animal }: AnimalListItemProps) {
  const { likes, dislikes } = countLikesAndDislikes(animal);
  return (
    <Card className="h-full">
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

      <CardContent>
        <p>{animal.characteristics.slogan}</p>
      </CardContent>

      <CardFooter className="italic text-sm flex justify-between">
        <div className="flex items-center gap-2">
          <MapPinned size={24} className="min-w-6" />
          {animal.locations.join(', ')}
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            {likes}
            <ThumbsUp size={16} />
          </span>

          <span className="flex items-center gap-1">
            {dislikes}
            <ThumbsDown size={16} />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
