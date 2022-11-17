import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ListView from '../ListView';

jest.mock('../useListView', () => () => ({
  states: {
    products: [
      {
        id: '1',
        model: 'x20',
        brand: 'Alcatel',
        imgUrl: 'string',
        price: 200,
      },
    ],
  },
  actions: { handleChangeFilter: jest.fn() },
}));

test('render ListView', () => {
  const { container } = render(
    <Router>
      <ListView />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
