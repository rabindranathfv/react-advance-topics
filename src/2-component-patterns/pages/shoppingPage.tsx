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
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((shoppingState) => {
      if (count === 0) {
        const { [product.id]: productDelete, ...restShoppingState } =
          shoppingState;
        return {
          ...restShoppingState,
        };
      }

      return {
        ...shoppingState,
        [`${product.id}`]: { ...product, count },
      };
    });
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
              value={shoppingCart[product.id]?.count || 0}
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
        {/* {Object.entries(shoppingCart).map(([pKey, product]) => { */}
        {Object.keys(shoppingCart).map((productId) => {
          return (
            <ProductCard
              key={productId}
              product={shoppingCart[productId]}
              className="gb-dark"
              style={{ width: "110px" }}
              onChange={(e) => onProductCountChange(e)}
              value={shoppingCart[productId].count}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title
                title={shoppingCart[productId].title}
                style={{ color: "#fff", fontSize: "10px" }}
                className="text-bold"
              />
              <ProductCard.Buttons
                className="custom-btn custmon-btn-gray"
                style={{ display: "flex", justifyContent: "end" }}
              />
            </ProductCard>
          );
        })}
      </div>

      <code>{JSON.stringify(shoppingCart, null, 5)}</code>
    </div>
  );
};
