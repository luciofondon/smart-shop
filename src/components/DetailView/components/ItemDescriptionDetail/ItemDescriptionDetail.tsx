import React from 'react';

import { IItemDescriptrionDetail } from './interfaces';
import './styles.css';

function ItemDescriptrionDetail({ label, value }: IItemDescriptrionDetail) {
  return (
    <div className="item-description">
      <div className="title-description">{label}</div>
      <div className="value-description">{value}</div>
    </div>
  );
}

export default ItemDescriptrionDetail;
