import { Animal } from '../types/animal';
import AnimalsListItem from './animals-list-item';

interface AnimalsListProps {
  animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {animals.map((animal) => (
        <AnimalsListItem
          key={animal.name.replace(/\s/g, '-')}
          animal={animal}
        />
      ))}
    </div>
  );
}
