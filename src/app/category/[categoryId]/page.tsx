import React from "react";
import {getProducts} from "../../../../actions/get-products";
import {getCategory} from "../../../../actions/get-category";
import Container from "@/components/common/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Filters from "@/components/filters";

interface CategoryPageProps {
  params: Promise<{categoryId: string}>;
  searchParams: Promise<{
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

interface ProductsParams {
  categoryId: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
}

async function CategoryPage({params, searchParams}: CategoryPageProps) {
  const {categoryId} = await params;
  const searchParamsResolved = await searchParams;
  const productsParams: ProductsParams = {
    categoryId,
  };

  if (searchParamsResolved.sort) {
    productsParams.sort = searchParamsResolved.sort;
  }

  if (searchParamsResolved.minPrice) {
    productsParams.minPrice = Number(searchParamsResolved.minPrice);
  }

  if (searchParamsResolved.maxPrice) {
    productsParams.maxPrice = Number(searchParamsResolved.maxPrice);
  }

  const products = await getProducts(productsParams);

  const category = await getCategory(categoryId);

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
