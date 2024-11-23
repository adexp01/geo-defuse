import { create } from "zustand";

export interface MapStore {
  droneRoutes: boolean;
  myRoute: boolean;
  childRoutes: boolean;
  userRoutes: boolean;
  setShowRoute: (
    routeType: keyof Omit<MapStore, "setShowRoute">,
    value: boolean
  ) => void;
}

export const useMapStore = create<MapStore>(set => ({
  droneRoutes: false,
  myRoute: false,
  childRoutes: false,
  userRoutes: false,
  setShowRoute: (routeType, value) =>
    set(state => ({ ...state, [routeType]: value }))
}));
