import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { IProductCard, IProductContextProps } from '../interfaces/product.interface';

export const productContext = createContext({} as IProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ product, children }: IProductCard ) => {
  const { count, increaseBy }  = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div id={product.id} className={styles.productCard}>
        { children }
      </div>
    </Provider>
  )
}
