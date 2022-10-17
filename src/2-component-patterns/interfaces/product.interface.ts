import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface IProductCard {
  product: Product;
  children?: ReactElement | ReactElement[]
}
export interface IProductContextProps {
  count: number;
  increaseBy: (n: number) => void;
  product: Product;
}