import { create } from "zustand";

interface IHeaderStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isMobile: true,
  setIsMobile: (value) => set({ isMobile: value }),
}));
