import { BikeFormData } from "../types";

export interface BikeClientStructure {
  getBikes: () => void;
  createBike: (bikeFormData: BikeFormData) => void;
  deleteBikeById: (bikeId: string) => void;
}
