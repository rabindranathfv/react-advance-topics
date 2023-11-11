import { Product } from "../interfaces/product.interface";

export const product = {
  id: "1",
  title: "coffe-mug 1 INFO!",
  // img: './coffee-mug.png'
};

export const product2 = {
  id: "2",
  title: "coffe-mug 2 NEW!",
  img: "./coffee-mug.png",
};

export const product3 = {
  id: "3",
  title: "coffe-mug 3 NEW!",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [
  { ...product },
  { ...product2 },
  { ...product3 },
];
