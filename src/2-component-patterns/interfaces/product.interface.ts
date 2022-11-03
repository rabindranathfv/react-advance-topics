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
  increaseBy: (n: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children, style }: IProductCard): JSX.Element;
  Title: ({ title, className, style }: IProductTitle) => JSX.Element;
  Image: ({ img, className, style }: IProductImage) => JSX.Element;
  Buttons: ({ className, style }: IProductButtons) => JSX.Element;
}
