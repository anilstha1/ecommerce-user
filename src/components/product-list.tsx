"use client";
import React from "react";
import {Product} from "../../types";
import ProductCard from "./product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

function ProductList({title, items}: ProductListProps) {
  return (
    <div className="space-y-4 md:col-span-3">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length == 0 && (
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
          No results found
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
