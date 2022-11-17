import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';


import Header from '../Header';
import { IProductContext } from './interfaces';
import useRoot from './useRoot';
import './styles.css';

export const ProductContext = createContext<IProductContext>({} as IProductContext);

const Root = () => {
  const {
    states: { countProducts },
    actions: { handleClickAddProduct },
  } = useRoot();

  return (
    <ProductContext.Provider value={{ count: countProducts, handleAdd: handleClickAddProduct }}>
      <Header />
      <Outlet />
    </ProductContext.Provider>
  );
};

export default Root;
