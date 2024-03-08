import { useEffect, useState } from 'react';

import Loading from '@/components/Layout/CardGrid/Loading';
import { useDetailProduct, useSorting } from '@/hooks/customHooks';
import useFilter from '@/hooks/useFilter';
import usePagination from '@/hooks/usePagination';
import { fetchFilteredProducts } from '@/libs/fetchProducts';
import { Product } from '@/types/customTypes';

import Card from '../Card/Card';

const CardGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const detailProduct = useDetailProduct();
  const sort = useSorting();
  const pagination = usePagination();

  const filter = useFilter();

  useEffect(() => {
    const fetchOptions = {
      params: Object.keys(filter.filter).length
        ? filter.filter
        : {
            offset: 0,
            limit: 51,
          },
      offset: 0,
      limit: 50,
      isFilter: !filter.filter,
      cb: setProducts,
    };

    fetchFilteredProducts(fetchOptions);
  }, [pagination.page]);

  useEffect(() => {
    const fetchOptions = {
      params: filter.filter,
      offset: 0,
      limit: 50,
      isFilter: true,
      cb: setProducts,
    };

    fetchFilteredProducts(fetchOptions);
  }, [filter.filter]);

  return (
    <>
      <div className="w-full py-5 pb-10 flex gap-5 flex-wrap justify-center">
        {products?.length ? (
          products.map((item) => (
            <Card
              id={item.id}
              title={item.product}
              price={item.price}
              key={item.id}
              onClick={() => {
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
    </>
  );
};

export default CardGrid;
