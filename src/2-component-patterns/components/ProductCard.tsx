import { createContext, ReactElement, CSSProperties} from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { IProductContextProps, Product } from '../interfaces/product.interface';

export const productContext = createContext({} as IProductContextProps);
const { Provider } = productContext;

export interface IProductCard {
  product: Product;
  children?: ReactElement | ReactElement[],
  className?: string;
  style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: IProductCard ) => {
  const { count, increaseBy }  = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div id={product.id} className={`${styles.productCard} ${className}`} style={style}>
        { children }
      </div>
    </Provider>
  )
}
