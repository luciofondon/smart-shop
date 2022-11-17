import { IProduct } from "./components/Item/interfaces";

export interface IUseListViewResponse {
    states: {
        products: IProduct[],
    },
    actions: {
        handleChangeFilter: (text: string) => void;
    },
}