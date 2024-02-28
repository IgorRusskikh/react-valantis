import { create } from 'zustand';

interface StateData {
  id: string;
  title: string;
  price: number;
  brand?: string;
}

interface DetailProductStore {
  state: {
    isOpen: boolean;
    data: StateData;
  };
  setState: (newState: StateData) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useDetailProduct = create<DetailProductStore>((set) => ({
  state: {
    isOpen: false,
    data: {
      id: "",
      title: "",
      price: 0,
      brand: "",
    },
  },
  setState: (newState: StateData) =>
    set((set) => ({
      state: {
        isOpen: set.state.isOpen,
        data: {
          ...newState,
        },
      },
    })),
  onOpen: () => set((set) => ({ state: { ...set.state, isOpen: true } })),
  onClose: () => set((set) => ({ state: { ...set.state, isOpen: false } })),
}));

export default useDetailProduct;
