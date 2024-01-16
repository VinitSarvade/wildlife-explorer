import { RefObject, useCallback, useEffect } from 'react';

import { useNavigate } from '@tanstack/react-router';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  animal: string;
}

export function useSearchAnimals({ inputRef, animal }: Props) {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const animal = inputRef.current?.value.toLowerCase();

      if (animal) {
        navigate({ to: `/search/$animal`, params: { animal } });
      }
    },
    [navigate, inputRef],
  );

  const handlePillClick = useCallback(
    (animal: string) => {
      navigate({ to: `/search/$animal`, params: { animal } });
    },
    [navigate],
  );

  useEffect(() => {
    if (animal) {
      inputRef.current!.value = animal;
    }
  }, [animal, inputRef]);

  return { handlePillClick, handleSubmit };
}
