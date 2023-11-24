'use client'

import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const { data, isLoading, isError } = useProducts();

  return (
    <div>
      {isLoading && (
        <div>Loading...</div>
      )}

      {isError && (
        <div>Error loading product data! Try again.</div>
      )}

      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
};

export default Products
