import { useContext } from "react";
import { productContext } from "./ProductCar";

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(productContext);

  return (
    <span className={styles.productDescription}>{ title ? title : product.title }</span>
  )
}
