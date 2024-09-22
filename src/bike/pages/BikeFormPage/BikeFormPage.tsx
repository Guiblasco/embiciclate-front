import { BikeClient } from "../../api/BikesClient";
import BikeForm from "../../components/BikeForm/BikeForm";
import { BikeFormData } from "../../types";

const BikesFormPage = (): React.ReactElement => {
  const createBike = async (bikeForm: BikeFormData) => {
    const bikeClient = new BikeClient();

    await bikeClient.createBike(bikeForm);
  };
  return (
    <>
      <h1 className="page-container__title">Crear una bici</h1>
      <BikeForm submitBike={createBike} />
    </>
  );
};

export default BikesFormPage;
