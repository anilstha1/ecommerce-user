import Billboard from "@/components/billboard";
import {getBillboard} from "../../actions/get-billboard";
import {getProducts} from "../../actions/get-products";
import ProductList from "@/components/product-list";

export default async function Home() {
  const billboard = await getBillboard("cm9x54sxx0000vk3wni4jcf6z");

  const products = await getProducts({
    isFeatured: true,
  });

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col">
      <Billboard data={billboard} />

      <div className="flex flex-col gap-y-8 px-4 sm:px-6b lg:px-8 mb-10">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  );
}
