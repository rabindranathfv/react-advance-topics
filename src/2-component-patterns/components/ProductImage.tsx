import { useContext } from "react";
import { productContext } from "./ProductCar";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(productContext);

  return (
    <img className={styles.productImg} src={ (img ? img : product.img) ?? noImage} alt="Product description"  />
  )
}
