import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  let { product } = useParams();
  const singleProduct = products.find((prod) => {
    return prod.id == product;
  });
  const { image, name } = singleProduct;
  return (
    <section>
      <img src={image} />
      <h4>{name}</h4>
      <Link to="/products"> Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
