import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import DetailView from './components/DetailView';
import ListView from './components/ListView';
import ErrorPage from './components/ErrorPage';
import Root from './components/Root';
import './utils/environment.d'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ListView />,
        handle: {
          crumb: () => [{ title: "Productos" }],
        }
      },
      {
        path: '/list',
        element: <ListView />,
        handle: {
          crumb: () => [{ title: "Productos" }],
        }
      },
      {
        path: '/detail/:productId',
        element: <DetailView />,
        handle: {
          crumb: () => [{ title: "Productos", path: "/list" }, { title: "Detalle" }],
        }
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<RouterProvider router={router} />);
