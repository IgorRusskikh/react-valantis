export interface FetchParams {
  offset?: number;
  limit?: number;
  product?: string;
  price?: number;
  brand?: string;
  ids?: string[];
}

export interface Fetcher {
  action: string;
  params: FetchParams;
}

export interface FetchFilteredProducts {
  params: FetchParams;
  offset: number;
  limit: number;
  setMaxPage?: (maxPage: number) => void;
  setProducts?: (products: Product[]) => void;
  isFilter?: boolean;
}

export interface Product {
  id?: string;
  product?: string;
  price?: number;
  brand?: string;
}

export interface ProductCard extends Product {
  title?: string;
  onClick?: () => void;
}

export interface ProductDetail {
  data: ProductCard;
}

export interface PageButton {
  page: number;
}

export interface SortProducts {
  products: Product[];
  sort: string;
}

export interface FilterProductsStore {
  filter?: Product;
  setFilter?: (filter: Product) => void;
}
