export interface IProduct {
  id: string;
  model: string;
  brand: string;
  imgUrl: string;
  price: number;
}

export interface IItem {
  product: IProduct;
}
