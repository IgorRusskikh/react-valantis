import { FetchProductParams } from '@/types/customTypes';

import fetcher from './fetcher';

const fetchProduct = async ({ productId, cb }: FetchProductParams) => {
  const fetchedProduct = await fetcher({
    action: "get_items",
    params: {
      ids: [productId],
    },
  });

  if (fetchedProduct?.result[0]) {
    cb({
      title: fetchedProduct?.result[0]?.product,
      price: fetchedProduct?.result[0]?.price,
      brand: fetchedProduct?.result[0]?.brand,
    });
  }
};

export default fetchProduct;
