import { createContext, ReactElement, CSSProperties } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { IProductContextProps, Product, onChangeArgs } from "../interfaces/product.interface";

export const productContext = createContext({} as IProductContextProps);
const { Provider } = productContext;

export interface IProductCard {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: IProductCard) => {
  const { count, increaseBy } = useProduct({ onChange, product });

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div
        id={product.id}
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};
