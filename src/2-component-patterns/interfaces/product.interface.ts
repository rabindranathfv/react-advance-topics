import { IProductButtons } from "../components/ProductButtons";
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
  product: Product;
  maxCount?: number;
  increaseBy: (n: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children, style }: IProductCard): JSX.Element;
  Title: ({ title, className, style }: IProductTitle) => JSX.Element;
  Image: ({ img, className, style }: IProductImage) => JSX.Element;
  Buttons: ({ className, style }: IProductButtons) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface IProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
