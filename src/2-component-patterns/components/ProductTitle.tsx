import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface IProductTitle {
  title?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: IProductTitle) => {
  const { product } = useContext(productContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={ style }>{ title ? title : product.title }</span>
  )
}
