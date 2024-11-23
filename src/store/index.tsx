import { create } from "zustand";

export interface GlobalStore {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>(set => ({
  modalOpen: false,
  setModalOpen: value => set({ modalOpen: value })
}));
