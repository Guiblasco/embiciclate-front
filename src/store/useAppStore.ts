import { create } from "zustand";
import { Bike } from "../bike/types";

interface AppStoreStructure {
  bikes: Bike[];
  loadBikes: (bikes: Bike[]) => void;
}

const useAppStore = create<AppStoreStructure>((set) => ({
  bikes: [],
  loadBikes: (bikes: Bike[]) =>
    set((state) => ({
      ...state,
      bikes,
    })),
}));

export default useAppStore;
