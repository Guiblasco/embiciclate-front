import { convertBikeFormDataToBike } from "../../utils/convertBikeFormDataToBike";
import { Bike, BikeDto, BikeFormData } from "../types";
import { BikeClientStructure } from "./types";

export class BikeClient implements BikeClientStructure {
  async getBikes(): Promise<Bike[]> {
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}bikes`);

    const apiBikesDto = (await apiResponse.json()) as { bikes: BikeDto[] };

    const { bikes: bikesDto } = apiBikesDto;

    const bikes = bikesDto.map<Bike>((bikeDto) => ({
      ...bikeDto,
      id: bikeDto._id,
      wheelSize: bikeDto.wheelSize,
    }));

    return bikes;
  }

  async createBike(bikeFormData: BikeFormData): Promise<Omit<Bike, "id">> {
    const bikeToCreate = convertBikeFormDataToBike(bikeFormData);

    const request = await fetch(`${import.meta.env.VITE_API_URL}bikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikeToCreate),
    });

    if (!request.ok) {
      throw new Error("An error occurred while sending the bike");
    }
    const createdBike = (await request.json()) as Omit<Bike, "id">;

    return createdBike;
  }
}
