'use client'

import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const Products = ({ query }: { query: string }) => {
  const { data, isLoading, isError } = useProducts();

  return (
    <div>
      {isLoading && (
        <div>Loading...</div>
      )}

      {isError && (
        <div>Error loading product data! Try again.</div>
      )}

      { /* Search functionality - fiter by product name, by URL query */}
      {data && (data
        .filter((item) => {
          return query.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(query.toLowerCase());
        })
        .map((product) => {
          return <ProductCard key={product.id} {...product} />;
        }))}
    </div>
  )
};

export default Products
