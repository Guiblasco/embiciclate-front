import { create } from "zustand";
import { Bike } from "../bike/types";

interface AppStoreStructure {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
  bikes: Bike[];
  currentBike: Bike;
  loadBikes: (bikes: Bike[]) => void;
  deleteBikeFromStore: (bikeId: string) => void;
  addBikeToStore: (newBike: Bike) => void;
  loadCurrentBike: (bike: Bike) => void;
}

const useAppStore = create<AppStoreStructure>((set) => ({
  isLoading: false,
  setIsLoading: (load: boolean) =>
    set(() => ({
      isLoading: load,
    })),

  bikes: [],
  currentBike: {} as Bike,
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

  addBikeToStore: (newBike: Bike) => {
    set((state) => ({
      bikes: [...state.bikes, newBike],
    }));
  },
  loadCurrentBike: (bike: Bike) => {
    set(() => ({
      currentBike: { ...bike },
    }));
  },
}));

export default useAppStore;
