import React, { useContext } from 'react';

import ActionDetail from './components/ActionDetail';
import DescriptionDetail from './components/DescriptionDetail';
import useDetailView from './useDetailView';
import './styles.css';
import Loading from './components/Loading';

const DetailView = () => {
  const {
    states: { product },
    actions: { handleClickAddProduct },
  } = useDetailView();


  if (!product) {
    return <Loading />;
  }
  return (
    <div className="product">
      {product && (
        <>
          <div className="product__img">
            <img width={250} src={product.imgUrl} />
          </div>
          <div>
            <DescriptionDetail product={product} />
            <ActionDetail product={product} handleClickAddProduct={handleClickAddProduct} />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailView;
