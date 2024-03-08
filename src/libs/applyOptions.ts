import { SortOptions } from '@/types/customTypes';

// TO SORT PRODUCTS BY ANOTHER VALUE
export const sortProducts = ({ products, sort }: SortOptions) => {
  if (!sort) {
    return products;
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "priceDown") {
      return b.price - a.price;
    }

    if (sort === "priceUp") {
      return a.price - b.price;
    }

    return 0;
  });

  return sortedProducts;
};
