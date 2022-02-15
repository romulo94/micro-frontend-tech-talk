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
      set((state) => {
        localStorage.setItem(
          "@coders/global",
          JSON.stringify({ loading: !state.loading })
        );
        return {
          loading: !state.loading,
        };
      });
    },
  })
);

const useStore = create(store);

export { useStore };
