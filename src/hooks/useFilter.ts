import { create } from 'zustand';

import { FiltersParams } from '@/types/customTypes';

const useFilter = create<FiltersParams>((set) => ({
  filter: {},
  setFilter: (filter) => set({ filter }),
}));

export default useFilter;
