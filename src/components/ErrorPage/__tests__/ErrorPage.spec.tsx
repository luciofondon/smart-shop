import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorPage from '../ErrorPage';

test('render ErrorPage', () => {
  const { container } = render(
    <Router>
      <ErrorPage />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
