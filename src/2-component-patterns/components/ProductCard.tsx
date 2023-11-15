import { createContext, ReactElement, CSSProperties } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
  IProductContextProps,
  InitialValues,
  Product,
  ProductCardHandlers,
  onChangeArgs,
} from "../interfaces/product.interface";

export const productContext = createContext({} as IProductContextProps);
const { Provider } = productContext;

export interface IProductCard {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (childrenArgs: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProductCard) => {
  const { count, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ count, increaseBy, product, maxCount }}>
      <div
        id={product.id}
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
