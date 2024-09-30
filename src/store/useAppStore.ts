import { create } from "zustand";
import { Bike } from "../bike/types";

interface AppStoreStructure {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
  bikes: Bike[];
  loadBikes: (bikes: Bike[]) => void;
  deleteBikeFromStore: (bikeId: string) => void;
}

const useAppStore = create<AppStoreStructure>((set) => ({
  isLoading: false,
  setIsLoading: (load: boolean) =>
    set(() => ({
      isLoading: load,
    })),

  bikes: [],
  loadBikes: (bikes: Bike[]) =>
    set((state) => ({
      ...state,
      bikes,
    })),

  deleteBikeFromStore: (bikeId: string) => {
    set((state) => ({
      bikes: state.bikes.filter((bike) => bike.id !== bikeId),
    }));
  },
}));

export default useAppStore;
