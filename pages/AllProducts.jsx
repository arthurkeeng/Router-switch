import React from "react";
import products from "../data";
import { Link } from "react-router-dom";
const AllProducts = () => {
  return (
    <section>
      {products.map((product) => {
        const { id, name, image } = product;

        return (
          <article key={id}>
            <h4>{name}</h4>
            <Link to={`/products/${id}`}>more Info</Link>
          </article>
        );
      })}
    </section>
  );
};

export default AllProducts;
