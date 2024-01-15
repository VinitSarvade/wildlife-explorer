import * as router from '@tanstack/react-router';
import { render } from '@testing-library/react';

import SearchAnimals from '../search-animals';

jest.mock('@tanstack/react-router');

describe('SearchAnimals', () => {
  it('should work as expected', () => {
    const spy = jest.spyOn(router, 'useNavigate');
    render(<SearchAnimals />);
    expect(spy).toHaveBeenCalled();
  });
});
