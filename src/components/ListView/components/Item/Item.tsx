import React from 'react';
import { Link } from 'react-router-dom';

import { IItem } from './interfaces';
import './styles.css';

const Item = ({ product }: IItem) => {
  return (
    <div className="item">
      <Link to={`/detail/${product.id}`}>
        <div className="item__image">
          <img width={150} src={product.imgUrl} />
        </div>
        <div className="item__detail">
          <div className="item__detail-model">{product.model}</div>
          <div className="item__detail-brand">{product.brand}</div>
          <div className="item__detail-price">
            {product.price && <><div className="currency-value"> {product.price}</div> <div className='currency'>€</div></>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
