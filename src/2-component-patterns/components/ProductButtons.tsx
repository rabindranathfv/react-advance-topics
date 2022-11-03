import { CSSProperties, useContext } from "react"
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface IProductButtons {
  className?: string;
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: IProductButtons) => {
  const { increaseBy, count } = useContext(productContext)

  return (
    <div className={ styles.buttonsContainer } style={ style }>
      <button className={ `${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}> - </button>
      <div className={ `${styles.countLabel} ${className}`}> { count } </div>

      <button className={`${styles.buttonAdd} ${className}`} onClick={ () => increaseBy(1)}> + </button>
  </div>
  )
}