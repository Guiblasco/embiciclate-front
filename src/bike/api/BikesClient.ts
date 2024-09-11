import { Bike, BikeDto } from "../types";
import { BikeClientStructure } from "./types";

export class BikeClient implements BikeClientStructure {
  async getBikes(): Promise<Bike[]> {
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}bikes`);

    const apiBikesDto = (await apiResponse.json()) as { bikes: BikeDto[] };

    const { bikes: bikesDto } = apiBikesDto;

    const bikes = bikesDto.map<Bike>((bikeDto) => ({
      ...bikeDto,
      id: bikeDto._id,
    }));

    return bikes;
  }
}
