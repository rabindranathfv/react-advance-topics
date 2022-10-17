import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { Product } from '../interfaces/product.interface';

interface IProductCard {
  product: Product;
}

export const ProductImage = ({ img = '' }) => {
  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="Product description"  />
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <span className={styles.productDescription}>{ title }</span>
  )
}

export interface IProductButtonsProps {
  count: number;
  increaseBy: (n: number) => void;
}


export const ProductButtons = ({ count, increaseBy}: IProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={ styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <div className={styles.countLabel}> { count } </div>

      <button className={styles.buttonAdd} onClick={ () => increaseBy(1)}> + </button>
  </div>
  )
}

export const ProductCar = ({ product }: IProductCard ) => {
  const { count, increaseBy }  = useProduct();
  const { id, title, img } = product;

  return (
    <div id={id} className={styles.productCard}>
      <ProductImage img={ img } />

      <ProductTitle title= { title} />

      <ProductButtons count={ count } increaseBy={ increaseBy } />
    </div>
  )
}
