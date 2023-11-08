import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/product.interface";

interface IUseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange }: IUseProductArgs) => {
  const [count, setCount] = useState(0);

  const increaseBy = (value: number) => {
    const newCount = Math.max(count + value, 0);
    setCount(newCount);

    onChange && onChange({ count: newCount, product});
  };

  return {
    count,
    increaseBy,
  };
};
