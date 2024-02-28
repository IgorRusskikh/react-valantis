import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import Loading from '@/components/Layout/CardGrid/Loading';
import useDetailProduct from '@/hooks/useDetailProduct';
import useSearch from '@/hooks/useSearch';
import useSorting from '@/hooks/useSorting';
import fetchProducts from '@/libs/fetchProducts';

import Card from '../Card/Card';

interface Product {
  id: string;
  product: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

const CardGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  const detailProduct = useDetailProduct();
  const sort = useSorting();
  const search = useSearch();

  useEffect(() => {
    // FETCHHING PRODUCTS
    fetchProducts({
      action: "get_ids",
      params: { offset: 0, limit: 10 },
      cb: setProducts,
    });
  }, []);

  // MEMORYING DATA
  const memoizedData = useMemo(() => {
    let filteredProducts = products;

    // FILTERING PRODUCTS BY NAME
    if (search.query) {
      filteredProducts = products.filter((product) =>
        product.product.includes(search.query)
      );
    }

    // SORTING PRODUCTS BY ANOTHER VALUE
    if (sort.sortBy.value) {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (sort.sortBy.value === "priceDown") {
          return a.price - b.price;
        }

        if (sort.sortBy.value === "priceUp") {
          return b.price - a.price;
        }
      });
    }

    return filteredProducts;
  }, [products, search.query, sort.sortBy.value]);

  return (
    <div className="w-full py-5 pb-10 flex gap-5 flex-wrap justify-center">
      {memoizedData?.length ? (
        memoizedData.map((item) => (
          <Card
            id={item.id}
            title={item.product}
            price={item.price}
            key={item.id}
            onClick={() => {
              // router.push(`/product/${item.id}`);
              detailProduct.setState({
                id: item.id,
                title: item.product,
                price: item.price,
              });
              detailProduct.onOpen();
            }}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CardGrid;
