import qs from "query-string";

interface Query {
  isFeatured?: boolean;
  categoryId?: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
}

export const getProducts = async (query: Query) => {
  const url = qs.stringifyUrl(
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
      query: {
        ...query,
        minPrice: query.minPrice?.toString(),
        maxPrice: query.maxPrice?.toString(),
      },
    },
    {skipNull: true, skipEmptyString: true}
  );

  console.log(url);
  const res = await fetch(url);
  return res.json();
};
