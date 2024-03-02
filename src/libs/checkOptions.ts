import { FilterOptions, SortOptions } from '@/types/customTypes';

// TO SORT PRODUCTS BY ANOTHER VALUE
export const sortProducts = ({ products, sort }: SortOptions) => {
  if (!sort) {
    return products;
  }

  const sortedProducts = products.sort((a, b) => {
    if (sort === "priceDown") {
      return a.price - b.price;
    }

    if (sort === "priceUp") {
      return b.price - a.price;
    }
  });

  return sortedProducts;
};

// TO FILTER PRODUCTS BY NAME
export const filterProducts = ({ products, filter }: FilterOptions) => {
  if (!filter) {
    return products;
  }

  const filteredProducts = products.filter((product) => {
    product.product.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(filteredProducts);

  return filteredProducts;
};
