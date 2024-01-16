import { render } from '@testing-library/react';

import { Animal, DietType } from '../../types/animal';
import AnimalsListItem from '../animals-list-item';

describe('AnimalsListItem', () => {
  it('should render the animal card with correct information', () => {
    const animal = {
      name: 'Lion',
      locations: ['location1'],
      taxonomy: { scientific_name: 'Panthera leo', family: 'Felidae' },
      characteristics: { diet: DietType.Carnivore },
    } as Animal;

    const { getByText, getByTitle } = render(
      <AnimalsListItem animal={animal} />,
    );

    const animalName = getByText(animal.name);
    expect(animalName).toBeDefined();

    const family = getByTitle(`Family: ${animal.taxonomy.family}`);
    expect(family).toBeDefined();

    const scientificName = getByTitle(
      `Scientific Name: ${animal.taxonomy.scientific_name}`,
    );
    expect(scientificName).toBeDefined();

    const dietIcon = getByTitle('Carnivore');
    expect(dietIcon).toBeDefined();

    const location = getByText(animal.locations[0]);
    expect(location).toBeDefined();
  });
});
