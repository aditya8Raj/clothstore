import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Shopping Everyday
          </h1>
          <span className="w-20 h=[3px] bg-black"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
            Looking for stylish and trendy clothing at an affordable price?
            Check out our newly launched clothings! We offer a wide selection of
            clothes for men and women of all ages, made from high-quality
            materials and designed with the latest fashion trends in mind. With
            easy online shopping and reliable shipping, it's never been easier
            to find your next favorite outfit. Come check out our collection
            today!
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
          {products?.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
