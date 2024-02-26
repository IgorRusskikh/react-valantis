import { create } from 'zustand';

interface DetailProductStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDetailProduct = create<DetailProductStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDetailProduct;
