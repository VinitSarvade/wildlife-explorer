import { render } from '@testing-library/react';

import { Animal } from '../../types/animal';
import AnimalsList from '../animals-list';

describe('AnimalsList', () => {
  it('should render the list of animals', () => {
    const animals = [
      {
        name: 'Lion',
        locations: ['location1'],
        taxonomy: { scientific_name: 'Panthera leo' },
        characteristics: { diet: 'Carnivore' },
      } as Animal,
      {
        name: 'Tiger',
        locations: ['location2'],
        taxonomy: { scientific_name: 'Panthera tigris' },
        characteristics: { diet: 'Omnivore' },
      } as Animal,
      {
        name: 'Leopard',
        locations: ['location1', 'location2'],
        taxonomy: { scientific_name: 'Panthera pardus' },
        characteristics: { diet: 'Carnivore' },
      } as Animal,
    ];

    const { getByText } = render(<AnimalsList animals={animals} />);

    animals.forEach((animal) => {
      const animalName = getByText(animal.name);
      expect(animalName).toBeDefined();
    });
  });
});
