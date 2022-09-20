import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

export const ProductCar = () => {
  const { count, increaseBy }  = useProduct();

  return (
    <div className={styles.productCard}>
      {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug"  /> */}
      <img className={styles.productImg} src={noImage} alt="no Imagen"  />

      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
          <button className={ styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
          <div className={styles.countLabel}> { count } </div>

          <button className={styles.buttonAdd} onClick={ () => increaseBy(1)}> + </button>
      </div>
    </div>
  )
}
