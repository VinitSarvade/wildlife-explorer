import { useCallback, useRef } from 'react';

import { useNavigate } from '@tanstack/react-router';
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
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const animal = inputRef.current?.value;

      if (animal) {
        navigate({ to: `/search/$animal`, params: { animal } });
      }
    },
    [navigate],
  );

  const handlePillClick = useCallback(
    (animal: string) => {
      inputRef.current!.value = animal;
      navigate({ to: `/search/$animal`, params: { animal } });
    },
    [navigate],
  );

  return (
    <>
      <form
        className="flex w-full max-w-sm mx-auto items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Search for an animal" ref={inputRef} />

        <Button type="submit">
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
