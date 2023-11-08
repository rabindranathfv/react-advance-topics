import { useState } from "react";
import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { Product, onChangeArgs } from "../interfaces/product.interface";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "coffe-mug 1 INFO!",
  // img: './coffee-mug.png'
};

const product2 = {
  id: "2",
  title: "coffe-mug 2 NEW!",
  img: "./coffee-mug.png",
};

const product3 = {
  id: "3",
  title: "coffe-mug 3 NEW!",
  img: "./coffee-mug2.png",
};

const products: Product[] = [{ ...product }, { ...product2 }, { ...product3 }];

interface IProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart[];
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    console.log(
      "🚀 ~ file: shoppingPage.tsx:39 ~ onProductCountChange ~ onProductCountChange:",
      count,
      product
    );
  };

  return (
    <div>
      <h1>SHOPPING PAGE</h1>
      <br />

      <h3> Products mapping component </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="gb-dark"
              onChange={(e) => onProductCountChange(e)}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle
                title={product.title}
                style={{ color: "#fff" }}
                className="text-bold"
              />
              <ProductButtons className="custom-btn custmon-btn-gray" />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product}
          className="gb-dark"
          style={{ width: "100px" }}
          onChange={(e) => onProductCountChange(e)}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={"valid TITLE"} />
          <ProductCard.Buttons
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>

        <ProductCard product={product2} style={{ width: "100px" }}>
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-btn custmon-btn-gray" />
        </ProductCard>

        <ProductCard
          product={product3}
          className="gb-dark"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-btn custmon-btn-gray" />
        </ProductCard>
      </div>
    </div>
  );
};
