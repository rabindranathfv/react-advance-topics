import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  Product,
  onChangeArgs,
} from "../interfaces/product.interface";

interface IUseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  initialValues,
  onChange,
  value = 0,
}: IUseProductArgs) => {
  const [count, setCount] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    console.log("HERE!");
    if (isControlled.current && onChange) {
      return onChange({ count: value, product });
    }

    let newCount = Math.max(count + value, 0);
    if (initialValues?.maxCount) {
      newCount = Math.min(newCount, initialValues.maxCount);
    }
    setCount(newCount);

    onChange && onChange({ count: newCount, product });
  };

  const reset = () => {
    setCount(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCount(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    count,
    isMaxCountReached: !!initialValues?.count && initialValues.count === count,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
