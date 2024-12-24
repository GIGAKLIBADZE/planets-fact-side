import React from "react";

export const products = [
  {
    name: "product 1",
    price: 100,
    id: 1,
  },
  {
    name: "product 2",
    price: 200,
    id: 2,
  },
  {
    name: "product 3",
    price: 300,
    id: 3,
  },
  {
    name: "product 4",
    price: 400,
    id: 4,
  },
  {
    name: "product 5",
    price: 500,
    id: 5,
  },
];

const Products: React.FC = () => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
