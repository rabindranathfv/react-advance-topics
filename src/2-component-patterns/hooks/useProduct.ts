import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/product.interface";

interface IUseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: IUseProductArgs) => {
  const [count, setCount] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ count: value, product });
    }

    const newCount = Math.max(count + value, 0);
    setCount(newCount);

    onChange && onChange({ count: newCount, product });
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return {
    count,
    increaseBy,
  };
};
