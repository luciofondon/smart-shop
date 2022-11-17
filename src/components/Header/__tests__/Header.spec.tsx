import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { ProductContext } from '../../Root/Root';
import { BrowserRouter as Router } from 'react-router-dom';

test('render Header', () => {
  const handleAdd = jest.fn();

  const { container } = render(
    <Router>
      <ProductContext.Provider
        value={{
          count: 5,
          handleAdd,
        }}
      >
        <Header />;
      </ProductContext.Provider>
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
