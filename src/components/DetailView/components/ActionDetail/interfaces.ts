import { SelectChangeEvent } from '@mui/material';
import { IProductAdd } from '../../../Root/interfaces';
import { IProductDetail } from '../../interfaces';

export interface IActionDetail {
  product: IProductDetail;
  handleClickAddProduct: (product: IProductAdd) => void;
}

export interface IUseActionDetail {
  product: IProductDetail;
  handleClickAddProduct: (product: IProductAdd) => void;
}

export interface IUseActionDetailResponse {
  states: {
    storage: number;
    color: number;
  };
  actions: {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: SelectChangeEvent) => void;
  };
}
