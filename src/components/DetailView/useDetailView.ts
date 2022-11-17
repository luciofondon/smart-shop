import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { IProductAdd } from '../Root/interfaces';
import { ProductContext } from '../Root/Root';
import { IProductDetail, IUseDetailViewResponse } from './interfaces';

const BASE_URL = process.env.REACT_APP_ENDPOINT;

/**
 * Custom hook for DetailView
 * @returns {object} states - Product detail
 * @returns {object} actions - function for add product
 */
const useDetailView = (): IUseDetailViewResponse => {
  const { handleAdd } = useContext(ProductContext);
  const { productId } = useParams();

  const handleClickAddProduct = (product: IProductAdd) => {
    handleAdd(product);
  };

  const { data } = useFetch<IProductDetail | null>(
    `${BASE_URL}/api/product/${productId}`,
    productId,
    null,
  );

  return {
    states: {
      product: data,
    },
    actions: {
      handleClickAddProduct,
    },
  };
};

export default useDetailView;
