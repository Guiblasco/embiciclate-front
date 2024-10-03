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

  async createBike(bikeFormData: BikeFormData): Promise<Bike> {
    const bikeToCreate = convertBikeFormDataToBike(bikeFormData);

    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}bikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikeToCreate),
    });

    if (!apiResponse.ok) {
      throw new Error("An error occurred while sending the bike");
    }
    const apiCreatedBike = (await apiResponse.json()) as BikeDto;

    const newBike = {
      ...apiCreatedBike,
      id: apiCreatedBike._id,
    };

    return newBike;
  }

  async deleteBikeById(bikeId: string): Promise<Bike> {
    const apiResponse = await fetch(
      `${import.meta.env.VITE_API_URL}bikes/${bikeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!apiResponse.ok) {
      throw new Error("An error occurred while deleting the bike");
    }
    const deletedBike = (await apiResponse.json()) as Bike;

    return deletedBike;
  }

  async getBikeById(bikeId: string): Promise<Bike> {
    const apiResponse = await fetch(
      `${import.meta.env.VITE_API_URL}bikes/${bikeId}`,
    );

    if (!apiResponse.ok) {
      throw new Error("An error occurred while getting the bike");
    }

    const { bikeToShow } = (await apiResponse.json()) as {
      bikeToShow: BikeDto;
    };

    const bike = {
      ...bikeToShow,
      id: bikeToShow._id,
    };
    return bike;
  }
}
