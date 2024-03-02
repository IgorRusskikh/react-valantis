import { create } from 'zustand';

interface FiterByStore {
  query: string;
  setQuery: (query: string) => void;
}

const useFilterByPrice = create<FiterByStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
}));

export default useFilterByPrice;
