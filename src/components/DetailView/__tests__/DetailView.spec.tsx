import React from 'react';
import { render } from '@testing-library/react';

import DetailView from '../DetailView';
import { IProductDetail } from '../interfaces';
import useDetailView from '../useDetailView';

const productMock: IProductDetail = {
  announced: '',
  audioJack: '',
  battery: 'Removable Li-Po 4080 mAh battery',
  bluetooth: [],
  brand: 'Alcatel',
  chipset: '',
  colors: [],
  cpu: 'Octa-core 1.3 GHz Cortex-A53',
  dimentions: '153.8 x 75.6 x 8.5 mm (6.06 x 2.98 x 0.33 in)',
  displayResolution: '5.5 inches ',
  displaySize: '',
  displayType: '',
  edge: '',
  externalMemory: '',
  gprs: '',
  gps: '',
  gpu: '',
  id: '',
  imgUrl: 'https://front-test-api.herokuapp.com/images/P2oqviM96_ozwsgZkj9Xf.jpg',
  internalMemory: [],
  model: 'Liquid Z6 Plus',
  networkSpeed: '',
  networkTechnology: '',
  nfc: '',
  options: {
    colors: [{ code: 1, name: 'Rojo' }],
    storages: [{ code: 1, name: '100GB' }],
  },
  os: '',
  price: '220',
  primaryCamera: ['13 MPautofocusLED flash'],
  radio: '',
  ram: '3 GB RAM',
  secondaryCmera: ['5 MP'],
  sensors: [],
  sim: '',
  speaker: '',
  status: '',
  usb: '',
  weight: '169',
  wlan: [],
};

jest.mock('../useDetailView');

/* jest.mock('../useDetailView', () => () => ({
    states: {
        product: productMock
    },
    actions: { handleClickAddProduct: jest.fn() }
}
));
 */

test('render DetailView with Loading', () => {
  useDetailView.mockImplementation(() => ({
    states: {
      product: null,
    },
    actions: { handleClickAddProduct: jest.fn() },
  }));

  const { container, getByText } = render(<DetailView />);
  expect(getByText('Cargando...')).toBeTruthy();
  expect(container).toMatchSnapshot('empty');
});

test('render DetailView with Product', () => {
  useDetailView.mockImplementation(() => ({
    states: {
      product: productMock,
    },
    actions: { handleClickAddProduct: jest.fn() },
  }));
  const { container } = render(<DetailView />);
  expect(container).toMatchSnapshot('data');
});
