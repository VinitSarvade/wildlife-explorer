import * as router from '@tanstack/react-router';
import { fireEvent, render } from '@testing-library/react';

import SearchAnimals from '../search-animals';

jest.mock('@tanstack/react-router');

describe('SearchAnimals', () => {
  beforeEach(() => {
    jest.spyOn(router, 'useParams').mockImplementation(() => ({
      animal: undefined,
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should work as expected', () => {
    const navigate = jest.spyOn(router, 'useNavigate');
    render(<SearchAnimals />);
    expect(navigate).toHaveBeenCalled();
  });

  it('should handle form submission', () => {
    const navigateMock = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { getByPlaceholderText, getByRole } = render(<SearchAnimals />);
    const input = getByPlaceholderText('Search for an animal');
    const button = getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'lion' } });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith({
      to: `/search/$animal`,
      params: { animal: 'lion' },
    });
  });

  it('should handle pill click', () => {
    const navigateMock = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);

    const { getByText } = render(<SearchAnimals />);
    const pill = getByText('tiger');

    fireEvent.click(pill);

    expect(navigateMock).toHaveBeenCalledWith({
      to: `/search/$animal`,
      params: { animal: 'tiger' },
    });
  });
});
