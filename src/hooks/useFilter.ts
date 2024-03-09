import { create } from 'zustand';

import { FilterProductsStore } from '@/types/customTypes';

const useFilter = create<FilterProductsStore>((set) => ({
  filter: {},
  setFilter: (filter) => set({ filter }),
}));

export default useFilter;
