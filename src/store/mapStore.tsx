import { create } from "zustand";

export interface MapStore {
  showRoute: boolean;
  setShowRoute: (value: boolean) => void;
}

export const useMapStore = create<MapStore>(set => ({
  showRoute: false,
  setShowRoute: value => set({ showRoute: value })
}));
