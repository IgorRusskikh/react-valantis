import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import Loading from '@/app/Loading';
import useLoading from '@/hooks/useLoading';
import useSearch from '@/hooks/useSearch';
import fetcher from '@/libs/fetcher';

import Card from '../Card/Card';

interface CardProps {
  id: string;
  product: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

const CardGrid = () => {
  const [products, setProducts] = useState<CardProps[]>([]);

  const router = useRouter();

  const loading = useLoading();
  const search = useSearch();

  useEffect(() => {
    loading.setIsLoading(true);

    // FETCHING PRODUCTS LIST
    const fetchProducts = async () => {
      const productIds = await fetcher({
        action: "get_ids",
        params: { offset: 0, limit: 10 },
      });

      if (productIds?.result) {
        const products = await fetcher({
          action: "get_items",
          params: {
            ids: productIds.result,
          },
        });

        // CREATING ARRAY WITH UNIQUE PRODUCTS
        if (products?.result) {
          const uniqueProducts = new Map(
            products.result.map((product) => [product.id, product])
          );

          const uniqueProductsArray = Array.from(uniqueProducts.values());

          setProducts(uniqueProductsArray);
          loading.setIsLoading(false);
        }
      }
    };

    fetchProducts();
  }, []);

  // SEARCH BY NAME
  const memoizedData = useMemo(() => {
    if (search.query) {
      return products.filter((product) =>
        product.product.includes(search.query)
      );
    }

    return products;
  }, [products, search.query]);

  console.log(memoizedData);

  return (
    <div className="w-full py-5 pb-10 flex gap-5 flex-wrap justify-center">
      {loading.isLoading ? (
        <Loading />
      ) : (
        memoizedData.map((item) => (
          <Card
            id={item.id}
            title={item.product}
            price={item.price}
            key={item.id}
            onClick={() => {
              router.push(`/product/${item.id}`);
            }}
          />
        ))
      )}
    </div>
  );
};

export default CardGrid;
