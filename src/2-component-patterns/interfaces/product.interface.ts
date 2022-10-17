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

export interface ProductCardHOCProps {
  ({ product, children }: IProductCard): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element
  Buttons: () => JSX.Element
}