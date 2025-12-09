import React from "react";

const Products = React.lazy(() => import("products/App"));
const Cart = React.lazy(() => import("cart/App"));

export default function App() {
  return (
    <>
      <h1>Loading page</h1>
      <a href="/products">Products</a>
      <br />
      <a href="http://localhost:3002">Cart</a>
    </>
  );
}
