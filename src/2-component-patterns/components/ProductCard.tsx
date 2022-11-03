import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { IProductContextProps, Product } from '../interfaces/product.interface';

export const productContext = createContext({} as IProductContextProps);
const { Provider } = productContext;

export interface IProductCard {
  product: Product;
  children?: ReactElement | ReactElement[],
  className?: string;
}

export const ProductCard = ({ product, children, className }: IProductCard ) => {
  console.log('🚀 ~ file: ProductCard.tsx ~ line 17 ~ ProductCard ~ className', className);
  const { count, increaseBy }  = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      {/* <div id={product.id} className={styles.productCard}> */}
      <div id={product.id} className={`${styles.productCard} ${className}`}>
        { children }
      </div>
    </Provider>
  )
}
