import { create } from 'zustand';

interface SortingStorage {
  sortBy: {
    label: string;
    value: string;
  };
  setSortBy: (option: { label: string; value: string }) => void;
}

const useSorting = create<SortingStorage>((set) => ({
  sortBy: {
    label: "",
    value: "",
  },
  setSortBy: (option) => set({ sortBy: option }),
}));

export default useSorting;
