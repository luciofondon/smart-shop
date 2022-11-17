import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { IProduct } from './components/Item/interfaces';
import { IUseListViewResponse } from './interfaces';

const BASE_URL = process.env.REACT_APP_ENDPOINT;


/**
 * Custom hook for ListView
 * @returns {object} states - Products in the list
 * @returns {object} actions - function for filter product
 */
const useListView = (): IUseListViewResponse => {
  const [productsFilter, setProductsFilter] = useState<IProduct[]>([]);
  const [textFilter, setTextFilter] = useState<string>('');
  const { data } = useFetch<IProduct[] | []>(
    `${BASE_URL}/api/product`,
    'list',
    [],
  );

  useEffect(() => {
    setProductsFilter(
      data.filter(
        (product) =>
          product.brand.toLocaleLowerCase().startsWith(textFilter.toLocaleLowerCase()) ||
          product.model.toLocaleLowerCase().startsWith(textFilter.toLocaleLowerCase()),
      ),
    );
  }, [textFilter, data]);

  const handleChangeFilter = (text: string) => {
    setTextFilter(text);
  };

  return {
    states: {
      products: productsFilter,
    },
    actions: {
      handleChangeFilter,
    },
  };
};

export default useListView;
