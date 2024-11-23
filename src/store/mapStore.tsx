import { create } from "zustand";

export interface MapStore {
  showRoute: boolean;
  setShowRoute: (value: boolean) => void;
}

export const useMapStore = create<MapStore>(set => ({
  showRoute: true,
  setShowRoute: value => set({ showRoute: value })
}));
