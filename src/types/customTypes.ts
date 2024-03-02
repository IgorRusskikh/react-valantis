export interface Product {
  id: string;
  product: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

export interface FetchParams {
  action: string;
  params: {
    offset?: number;
    limit?: number;
    price?: number | undefined;
  };
  cb: (data: Product[]) => void;
}

export interface FilterOptions {
  products: Product[];
  filter: string;
}

export interface SortOptions {
  products: Product[];
  sort: string;
}
