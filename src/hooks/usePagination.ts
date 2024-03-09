import { create } from 'zustand';

interface PaginationStore {
  page: number;
  maxPage: number | null;
  setPage: (page: number) => void;
  setMaxPage: (maxPage: number) => void;
}

const usePagination = create<PaginationStore>((set) => ({
  page: 1,
  maxPage: null,
  setPage: (page: number) => set({ page }),
  setMaxPage: (maxPage: number) => set({ maxPage }),
}));

export default usePagination;
