import { Link, useParams } from '@tanstack/react-router';

import { Animal } from '../types/animal';
import AnimalsListItem from './animals-list-item';

interface AnimalsListProps {
  animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
  const params = useParams({ strict: false });
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {animals.map((animal) => (
        <Link
          to={`/search/$animal/$name/details`}
          params={{ name: animal.name, animal: params.animal }}
          key={animal.name.replace(/\s/g, '-')}
        >
          <AnimalsListItem animal={animal} />
        </Link>
      ))}
    </div>
  );
}
