import React from "react";
import { products } from "./Products";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  console.log(productId);

  return (
    <>
      <div>{product?.name}</div>
    </>
  );
};

export default Product;
