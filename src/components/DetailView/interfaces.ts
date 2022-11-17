import { IProductAdd } from '../Root/interfaces';

interface IColor {
  code: number;
  name: string;
}

interface IStorage {
  code: number;
  name: string;
}

export interface IProductDetail {
  announced: string;
  audioJack: string;
  battery: string;
  bluetooth: string[];
  brand: string;
  chipset: string;
  colors: string[];
  cpu: string;
  dimentions: string;
  displayResolution: string;
  displaySize: string;
  displayType: string;
  edge: string;
  externalMemory: string;
  gprs: string;
  gps: string;
  gpu: string;
  id: string;
  imgUrl: string;
  internalMemory: string[];
  model: string;
  networkSpeed: string;
  networkTechnology: string;
  nfc: string;
  options: { colors: IColor[]; storages: IStorage[] };
  os: string;
  price: string;
  primaryCamera: string | string[];
  radio: string;
  ram: string;
  secondaryCmera: string| string[];
  sensors: string[];
  sim: string;
  speaker: string;
  status: string;
  usb: string;
  weight: string;
  wlan: string[];
}

export interface IUseDetailViewResponse {
  states: {
    product: IProductDetail | null;
  };
  actions: {
    handleClickAddProduct: (product: IProductAdd) => void;
  };
}
