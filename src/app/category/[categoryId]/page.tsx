import React from "react";
import {getProducts} from "../../../../actions/get-products";
import {getCategory} from "../../../../actions/get-category";
import Container from "@/components/common/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Filters from "@/components/filters";

interface CategoryPageProps {
  params: {categoryId: string};
  searchParams: {
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

interface ProductsParams {
  categoryId: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
}

async function CategoryPage({params, searchParams}: CategoryPageProps) {
  const productsParams: ProductsParams = {
    categoryId: params.categoryId,
  };

  if (searchParams.sort) {
    productsParams.sort = searchParams.sort;
  }

  if (searchParams.minPrice) {
    productsParams.minPrice = Number(searchParams.minPrice);
  }

  if (searchParams.maxPrice) {
    productsParams.maxPrice = Number(searchParams.maxPrice);
  }

  const products = await getProducts(productsParams);

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24 grid grid-cols-1 md:grid-cols-4 gap-x-6 md:gap-y-8 md:pt-10">
          <Filters />
          <ProductList title="" items={products} />
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
