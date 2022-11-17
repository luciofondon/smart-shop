import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';

test('render Search', () => {
  const mockHandleChangeFilter = jest.fn();

  const { container } = render(<Search handleChangeFilter={mockHandleChangeFilter} />);
  expect(container).toMatchSnapshot();
});
