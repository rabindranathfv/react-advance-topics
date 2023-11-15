import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";

const product = products[0];

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
        <ProductCard
          key={product.id}
          product={product}
          className="gb-dark"
          initialValues={{
            count: 2,
            maxCount: 12,
          }}
        >
          {({ reset }) => (
            <>
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
              <button onClick={reset}>reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
