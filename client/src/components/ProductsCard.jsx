import React from "react";

const ProductsCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div>
        <img src={product.image} alt="productImg" />
      </div>
    </>
  );
};

export default ProductsCard;
