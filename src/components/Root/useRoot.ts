import { useState } from 'react';

import { IProductAdd, IProductAddResponse, IUseRootResponse } from './interfaces';

const BASE_URL = process.env.REACT_APP_ENDPOINT;

const useRoot = (): IUseRootResponse => {
  const [products, setProducts] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleClickAddProduct = async (product: IProductAdd) => {
    setProducts([...products, product.id]);

    const rawResponse = await fetch(`${BASE_URL}/api/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const content: IProductAddResponse = await rawResponse.json();

    setCount(content.count);
  };

  return {
    states: {
      countProducts: count,
    },
    actions: {
      handleClickAddProduct,
    },
  };
};

export default useRoot;
