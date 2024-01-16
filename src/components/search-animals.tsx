import { useRef } from 'react';

import { useParams } from '@tanstack/react-router';
import { LucideSearch } from 'lucide-react';

import Button from '@ui/button';
import Input from '@ui/input';
import Pill from '@ui/pill';

import { useSearchAnimals } from '../hooks/seach-animals';

const topSearchAnimals = [
  'lion',
  'tiger',
  'deer',
  'elephant',
  'snake',
  'shark',
  'gorilla',
  'eagle',
  'bear',
  'wolf',
  'whale',
];

export default function SearchAnimals() {
  const { animal } = useParams({ strict: false });

  const inputRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, handlePillClick } = useSearchAnimals({
    animal,
    inputRef,
  });

  return (
    <>
      <form
        className="flex w-full max-w-sm mx-auto items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Search for an animal" ref={inputRef} />

        <Button name="Search" type="submit">
          <LucideSearch />
          <span className="sr-only">Search</span>
        </Button>
      </form>

      <div className="flex justify-center">
        <div className="mt-5 flex flex-col lg:flex-row lg:items-center lg:gap-2 lg:justify-center">
          <h2 className="text-sm mb-3 lg:mb-0">Top Searches</h2>

          <div className="flex flex-wrap gap-2">
            {topSearchAnimals.map((animal, i) => (
              <Pill
                key={`${i}-${animal.at(0)}`}
                label={animal}
                onClick={handlePillClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
