import { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

import { IUseActionDetail, IUseActionDetailResponse } from './interfaces';

const EMPTY = -1;

const UseActionDetail = ({
  product,
  handleClickAddProduct,
}: IUseActionDetail): IUseActionDetailResponse => {
  const [storage, setStorage] = useState<number>(EMPTY);
  const [color, setColor] = useState<number>(EMPTY);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClickAddProduct({ id: product.id, colorCode: color, storageCode: storage });
  };

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.name == 'color') {
      setColor(Number(event.target.value));
    } else if (event.target.name == 'storage') {
      setStorage(Number(event.target.value));
    }
  };

  useEffect(() => {
    if (product) {
      setColor(product.options.colors[0].code);
      setStorage(product.options.storages[0].code);
    }
  }, [product]);

  return {
    states: {
      storage,
      color,
    },
    actions: {
      handleSubmit,
      handleChange,
    },
  };
};

export default UseActionDetail;
