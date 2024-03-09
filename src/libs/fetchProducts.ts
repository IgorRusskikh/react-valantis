import { FetchFilteredProducts, Product } from '@/types/customTypes';

import fetcher from './fetcher';

// PRODUCT FETCHER

const fetchFilteredProducts = async ({
  params,
  offset,
  limit,
  setMaxPage,
  setProducts,
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

      const maxPages = Math.ceil(filteredProducts.length);

      if (setMaxPage && filteredProducts.length) {
        setMaxPage(filteredProducts.length / 50);
        console.log("1sefsdf: " + filteredProducts.length / 50);
      }

      if (setProducts) {
        setProducts(filteredProducts);
      }
    } else {
      throw new Error("Ошибка при получении продуктов");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

export default fetchFilteredProducts;
