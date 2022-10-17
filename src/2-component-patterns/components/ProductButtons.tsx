import { useContext } from "react"
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { increaseBy, count } = useContext(productContext)

  return (
    <div className={styles.buttonsContainer}>
      <button className={ styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <div className={styles.countLabel}> { count } </div>

      <button className={styles.buttonAdd} onClick={ () => increaseBy(1)}> + </button>
  </div>
  )
}