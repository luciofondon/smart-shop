import React from 'react';
import { render } from '@testing-library/react';
import DescriptionDetail from '../DescriptionDetail';
import { IProductDetail } from '../../../interfaces';

test('render DescriptionDetail', () => {
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
  const { container } = render(<DescriptionDetail product={productMock} />);
  expect(container).toMatchSnapshot();
});
