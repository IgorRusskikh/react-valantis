import { FetchFilteredProducts, Product } from '@/types/customTypes';

import fetcher from './fetcher';

// PRODUCT FETCHER

export const fetchFilteredProducts = async ({
  params,
  offset = 0,
  limit = 50,
  cb,
  isFilter = false,
}: FetchFilteredProducts) => {
  try {
    const productIds = await fetcher({
      action: isFilter ? "filter" : "get_ids",
      params: params,
    });

    const products = await fetcher({
      action: "get_items",
      params: {
        ids: productIds.result,
      },
    });

    if (products?.result) {
      const uniqueProducts = new Map<string, Product>(
        products.result.map((product: Product) => [product.id, product])
      );

      const uniqueProductsArray = Array.from(uniqueProducts.values());

      const filteredProducts = uniqueProductsArray.slice(
        uniqueProductsArray.length > offset ? offset : 0,
        uniqueProductsArray.length > limit ? limit : uniqueProductsArray.length
      );

      console.log(filteredProducts);

      cb(filteredProducts);
    } else {
      throw new Error("Ошибка при получении продуктов");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};
