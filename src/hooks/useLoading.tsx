import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useLoading = create<LoadingStore>((set) => ({
  isLoading: true,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
}));

export default useLoading;
