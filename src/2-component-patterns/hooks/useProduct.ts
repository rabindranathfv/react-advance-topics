import { useState } from 'react';

export const useProduct = () => {
  const [count, setCount] = useState(0);

  const increaseBy = (value: number) => {
    setCount( s => Math.max( s + value, 0) )
  };

  return {
    count,

    increaseBy
  }
}
