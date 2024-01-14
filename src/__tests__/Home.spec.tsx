import { render } from '@testing-library/react';

import Home from '../routes/index';

describe('Home', () => {
  it('should work as expected', () => {
    render(<Home />);
  });
});
