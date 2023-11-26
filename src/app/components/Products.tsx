'use client'

import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";
import { useEffect, useState } from "react";

const Products = ({ query }: { query: string }) => {
  const { data, isLoading, isError, error } = useProducts();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 4;

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  }

  // Set page to first whenever the user types in the searchbox
  useEffect(() => {
    setCurrentPage(1);
  }, [query])

  // Filter products according to the query in URL, return ProductCards that match
  const filteredProducts = data
    ? data
      .filter((item) => {
        return query.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(query.toLowerCase());
      })
      .map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })
    : [];

  // Split the filtered products into batches (pages)
  const paginatedProducts = paginate(filteredProducts, currentPage, pageSize);

  return (
    <div>
      
      {isLoading && (
        <LoadingSpinner text="Loading products ..."/>
      )}

      {isError && (
        <ErrorAlert message={error.message} />
      )}

      {data?.length! > 0 && (
        <div className="flex flex-col gap-4">
          {paginatedProducts}
          <Pagination
            itemsSize={filteredProducts.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      )}

    </div>
  )
};

export default Products
