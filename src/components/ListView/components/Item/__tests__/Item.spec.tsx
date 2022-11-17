import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Item from '../Item';
import { IProduct } from '../interfaces';

test('render Item', () => {
  const productMock: IProduct = {
    brand: 'Acer',
    id: 'cGjFJlmqNPIwU59AOcY8H',
    imgUrl: 'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
    model: 'Liquid Z6 Plus',
    price: 220,
  };
  const { container } = render(
    <Router>
      <Item product={productMock} />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
