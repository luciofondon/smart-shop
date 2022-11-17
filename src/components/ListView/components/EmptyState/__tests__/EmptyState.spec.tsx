import React from 'react';
import { render } from '@testing-library/react';
import EmptyState from '../EmptyState';

test('render EmptyState', () => {
  const { container } = render(<EmptyState />);
  expect(container).toMatchSnapshot();
});
