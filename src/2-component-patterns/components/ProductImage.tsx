import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface IProductImage {
  img?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({ img = '', className, style }: IProductImage) => {
  const { product } = useContext(productContext);

  return (
    <img className={`${styles.productImg} ${className}`} style={ style } src={ (img ? img : product.img) ?? noImage} alt="Product description"  />
  )
}
