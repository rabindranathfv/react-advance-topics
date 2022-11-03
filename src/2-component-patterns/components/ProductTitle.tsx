import { useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface IProductTitle {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: IProductTitle) => {
  const { product } = useContext(productContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>{ title ? title : product.title }</span>
  )
}
