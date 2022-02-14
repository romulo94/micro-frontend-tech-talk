import create from "zustand";
import { combine } from "zustand/middleware";

type StoreProperties = {
  loading: boolean;
};

type StoreMethods = {
  toggle: () => void;
};

const store = combine<StoreProperties, StoreMethods>(
  {
    loading: false,
  },
  (set) => ({
    toggle() {
      set((state) => ({
        loading: !state.loading,
      }));
    },
  })
);

const useStore = create(store);

export { useStore };
