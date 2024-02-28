import fetcher from './fetcher';

interface FetcherParams {
  productId: string | string[];
  cb: (productId: {
    title: string;
    price: number;
    brand: null | string;
  }) => void;
}

const fetchProduct = async ({ productId, cb }: FetcherParams) => {
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
