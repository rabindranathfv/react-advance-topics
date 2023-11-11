import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/product.interface";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
