import { LucideSearch } from 'lucide-react';

import Button from '@ui/button';
import Input from '@ui/input';
import Pill from '@ui/pill';

const topSearchAnimals = [
  'Lion',
  'Panda',
  'Kangaroo',
  'Elephant',
  'Tiger',
  'Dolphin',
  'Gorilla',
  'Giraffe',
  'Polar Bear',
];

export default function SearchAnimals() {
  return (
    <>
      <div className="flex w-full max-w-sm mx-auto items-center space-x-2">
        <Input placeholder="Search for an animal" />
        <Button type="submit">
          <LucideSearch />
          <span className="sr-only">Search</span>
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="mt-5 flex flex-col lg:flex-row lg:items-center lg:gap-2 lg:justify-center">
          <h2 className="text-sm mb-3 lg:mb-0">Top Searches</h2>
          <div className="flex flex-wrap gap-2">
            {topSearchAnimals.map((animal, i) => (
              <Pill key={`${i}-${animal.at(0)}`} label={animal} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
