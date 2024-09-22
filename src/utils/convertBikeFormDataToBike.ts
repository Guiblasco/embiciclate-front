import { Bike, BikeFormData } from "../bike/types";

export const convertBikeFormDataToBike = (
  bikeFormData: BikeFormData,
): Omit<Bike, "id"> => {
  return {
    wheelSize: Number(bikeFormData.wheelSize),
    alternativeText: bikeFormData.alternativeText,
    brand: bikeFormData.brand,
    imageUrl: bikeFormData.imageUrl,
    material: bikeFormData.material,
    mode: bikeFormData.mode,
    model: bikeFormData.model,
    specs: bikeFormData.specs,
  };
};
