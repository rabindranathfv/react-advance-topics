import { useState } from "react";
import { IProductInCart, onChangeArgs } from "../interfaces/product.interface";
export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((shoppingState) => {
      const productInCar: IProductInCart = shoppingState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCar.count + count, 0) > 0) {
        productInCar.count += count;
        return {
          ...shoppingState,
          [product.id]: productInCar,
        };
      }

      const { [product.id]: productDelete, ...restShoppingState } =
        shoppingState;
      return {
        ...restShoppingState,
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
