import React from 'react';
import { render } from '@testing-library/react';

import ItemDescriptionDetail from '../ItemDescriptionDetail';

test('render ItemDescriptionDetail', () => {
  const { container } = render(<ItemDescriptionDetail label="Test" value="Test value" />);
  expect(container).toMatchSnapshot();
});
