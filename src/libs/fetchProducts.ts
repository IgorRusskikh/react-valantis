import { FetchParams, Product } from '@/types/customTypes';

import fetcher from './fetcher';

// PRODUCT FETCHER
const fetchProducts = async ({ action, params, cb }: FetchParams) => {
  const productIds = await fetcher({
    action: action,
    params: params,
  });

  // FETCHING PRODUCTS LIST BY IDS
  if (productIds?.result) {
    const products = await fetcher({
      action: "get_items",
      params: {
        ids: productIds.result,
      },
    });

    // CREATING ARRAY WITH UNIQUE PRODUCTS
    if (products?.result) {
      const uniqueProducts = new Map<string, Product>(
        products.result.map((product: Product) => [product.id, product])
      );

      const uniqueProductsArray = Array.from(uniqueProducts.values());

      cb(uniqueProductsArray);
    }
  }
};

export default fetchProducts;
