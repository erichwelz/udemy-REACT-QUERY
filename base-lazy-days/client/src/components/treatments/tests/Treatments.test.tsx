import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../../test-utils';
import { Treatments } from '../Treatments';

// make a function to generate a unique query client for each test

test('renders response from query', () => {
  renderWithQueryClient(<Treatments />);
});
