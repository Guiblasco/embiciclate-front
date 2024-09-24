import {
  createBikeError,
  createBikeSuccess,
} from "../../../components/Toasts/createBike/notifyCreateBike";
import { BikeClient } from "../../api/BikesClient";
import BikeForm from "../../components/BikeForm/BikeForm";
import { BikeFormData } from "../../types";

const BikesFormPage = (): React.ReactElement => {
  const createBike = async (bikeForm: BikeFormData) => {
    const bikeClient = new BikeClient();
    try {
      await bikeClient.createBike(bikeForm);
      createBikeSuccess();
    } catch (error) {
      createBikeError();
      throw error;
    }
  };
  return (
    <>
      <h1 className="page-container__title">Crear una bici</h1>
      <BikeForm submitBike={createBike} />
    </>
  );
};

export default BikesFormPage;
