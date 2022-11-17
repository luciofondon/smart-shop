import React from 'react';

import ItemDescriptionDetail from '../ItemDescriptionDetail';
import { IDescriptionDetail } from './interfaces';
import './styles.css';

const DescriptionDetail = ({ product }: IDescriptionDetail) => {
  return (
    <div className='details'>
      <ItemDescriptionDetail label="Marca" value={product.brand} />
      <ItemDescriptionDetail label="Modelo" value={product.model} />
      <ItemDescriptionDetail label="CPU" value={product.brand} />
      <ItemDescriptionDetail label="RAM" value={product.cpu} />
      <ItemDescriptionDetail label="Sistema operativo" value={product.os} />
      <ItemDescriptionDetail label="Resolucion" value={product.displayResolution} />
      <ItemDescriptionDetail label="Batería" value={product.battery} />
      {product.primaryCamera && product.primaryCamera.length > 0 && (
        <ItemDescriptionDetail label="Cámara principal" value={product.primaryCamera[0]} />
      )}
      {product.secondaryCmera && product.secondaryCmera.length > 0 && (
        <ItemDescriptionDetail label="Cámara secundaria" value={product.secondaryCmera[0]} />
      )}
      <ItemDescriptionDetail label="Dimensiones" value={product.dimentions} />
      <ItemDescriptionDetail label="Peso" value={product.weight} />
      <ItemDescriptionDetail label="Precio" value={`${product.price}€`} />
    </div>
  );
}

export default DescriptionDetail;
