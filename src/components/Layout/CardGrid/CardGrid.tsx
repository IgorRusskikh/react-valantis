import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Loading from '@/components/Layout/CardGrid/Loading';
import { useDetailProduct, useFilterByPrice, useSearch, useSorting } from '@/hooks/customHooks';
import { sortProducts } from '@/libs/checkOptions';
import fetchProducts from '@/libs/fetchProducts';
import { Product } from '@/types/customTypes';

import Card from '../Card/Card';

const CardGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(20);

  const [ref, inView] = useInView();

  const detailProduct = useDetailProduct();
  const sort = useSorting();
  const search = useSearch();
  const filterBy = useFilterByPrice();

  useEffect(() => {
    // FETCHHING PRODUCTS
    fetchProducts({
      action: "get_ids",
      params: { offset: 0, limit: 20 },
      cb: setProducts,
    });
  }, []);

  // DYNAMIC PRODUCTS DOWNLOADING
  useEffect(() => {
    // CHECKING IF BLOCK IN VIEW FIELD
    if (inView) {
      // FETCHHING MORE PRODUCTS
      fetchProducts({
        action: "get_ids",
        params: { offset: offset, limit: 20 },
        cb: (newProducts) => {
          setProducts(
            sortProducts({
              products: [...products, ...newProducts],
              sort: sort.sortBy.value,
            })
          );
        },
      });

      // SETTING OFFSET
      setOffset(offset + 20);
    }
  }, [inView]);

  useEffect(() => {
    console.log(sortProducts({ products: products, sort: sort.sortBy.value }));
  }, [sort.sortBy]);

  useEffect(() => {
    fetchProducts({
      action: "filter",
      params: { price: Number.parseInt(filterBy.query) },
      cb: setProducts,
    });

    console.log(filterBy.query);
  }, [filterBy.query]);

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
      <div ref={ref} className="flex flex-col gap-2 mb-5 animate-spin">
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
        </div>
      </div>
    </>
  );
};

export default CardGrid;
