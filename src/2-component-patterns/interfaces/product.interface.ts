import { IProductCard } from "../components/ProductCard";
import { IProductImage } from "../components/ProductImage";
import { IProductTitle } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  count: number;
  increaseBy: (n: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: IProductCard): JSX.Element;
  Title: ({ title }: IProductTitle) => JSX.Element;
  Image: ({ img, className }: IProductImage ) => JSX.Element
  Buttons: () => JSX.Element
}