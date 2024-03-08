import { IconType } from 'react-icons';

export interface Product {
  id: string;
  product: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

export interface FetcherArgs {
  action: string;
  params: {};
}

export interface FetchProductParams {
  productId: string | string[];
  cb: (productId: {
    title: string;
    price: number;
    brand: null | string;
  }) => void;
}

export interface FetchFilteredProducts {
  isFilter?: boolean;
  params: {
    offset?: number;
    limit?: number;
    product?: string | null;
    price?: number | null;
    brand?: string | null;
  };
  offset?: number;
  limit?: number;
  cb: (products: Product[]) => void;
}

export interface FiltersParams {
  filter: {
    product?: string;
    price?: number;
    brand?: string;
  };
  setFilter: (filter: {}) => void;
}

export interface FilterOptions {
  products: Product[];
  filter: string;
}

export interface SortOptions {
  products: Product[];
  sort: string;
}

export interface InputProps {
  placeholder?: string;
  type?: string;
  icon?: IconType;
  label?: string;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export interface SelectProps {
  label: string;
  options: any[];
  onClick?: () => string;
}
