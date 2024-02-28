import fetcher from './fetcher';

interface FetchParams {
  action: string;
  params: {
    offset: number;
    limit: number;
  };
  cb: (data: Product[]) => void;
}

interface Product {
  id: string;
  product: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

// PRODUCT FETCHER
const fetchProducts = async ({ action, params, cb }: FetchParams) => {
  const productIds = await fetcher({
    action: "get_ids",
    params: { offset: 0, limit: 10 },
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
