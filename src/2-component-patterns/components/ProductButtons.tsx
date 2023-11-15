import { CSSProperties, useCallback, useContext } from "react";
import { productContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface IProductButtons {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: IProductButtons) => {
  const { increaseBy, count, maxCount } = useContext(productContext);

  const isMaxReached = useCallback(() => {
    return !!maxCount && count === maxCount;
  }, [count, maxCount]);

  return (
    <div className={styles.buttonsContainer} style={style}>
      <button
        className={`${styles.buttonMinus} ${className}`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel} ${className}`}> {count} </div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() && styles.disabled
        } ${className}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
