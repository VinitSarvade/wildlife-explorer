import { Animal } from '../types/animal';

export function countLikesAndDislikes(animal: Animal) {
  return Object.values({
    ...animal.taxonomy_key_preferences,
    ...animal.characteristic_key_preferences,
  }).reduce(
    (acc, value) => {
      if (value > 0) {
        acc.likes += 1;
      }
      if (value < 0) {
        acc.dislikes += 1;
      }
      return acc;
    },
    { likes: 0, dislikes: 0 },
  );
}
