import {
  createBikeError,
  createBikeSuccess,
} from "../../../components/Toasts/createBike/notifyCreateBike";
import useAppStore from "../../../store/useAppStore";
import { BikeClient } from "../../api/BikesClient";
import BikeForm from "../../components/BikeForm/BikeForm";
import { BikeFormData } from "../../types";

const BikesFormPage = (): React.ReactElement => {
  const { addBikeToStore } = useAppStore();
  const createBike = async (bikeForm: BikeFormData) => {
    const bikeClient = new BikeClient();
    try {
      const newBike = await bikeClient.createBike(bikeForm);
      createBikeSuccess();
      addBikeToStore(newBike);
    } catch (error) {
      createBikeError(error as Error);
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
