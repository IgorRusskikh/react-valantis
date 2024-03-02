import { create } from 'zustand';

interface SearchStore {
  query: string;
  setQuery: (query: string) => void;
}

const useSearch = create<SearchStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query: query }),
}));

export default useSearch;
