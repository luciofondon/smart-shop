export interface IUseRootResponse {
  states: {
    countProducts: number;
  };
  actions: {
    handleClickAddProduct: (product: IProductAdd) => void;
  };
}

export interface IProductContext {
  count: number;
  handleAdd: (product: IProductAdd) => void;
}

export interface IProductAdd {
  id: string;
  colorCode: number;
  storageCode: number;
}

export interface IProductAddResponse {
  count: number;
}
