import { useEffect, useMemo } from "react";
import { BikeClient } from "../../api/BikesClient";
import BikeList from "../../components/BikeList/BikeList";
import useAppStore from "../../../store/useAppStore";
import MoonLoader from "react-spinners/MoonLoader";
import { createBikeError } from "../../../components/Toasts/createBike/notifyCreateBike";
import {
  deleteBikeError,
  deleteBikeSuccess,
} from "../../../components/Toasts/deleteBike/notifyDeleteBike";
import "./BikesListPage.css";

const BikesListPage = (): React.ReactElement => {
  const bikeClient = useMemo(() => new BikeClient(), []);

  const { bikes, loadBikes, isLoading, setIsLoading, deleteBikeFromStore } =
    useAppStore();

  useEffect(() => {
    const fetchbikes = async () => {
      setIsLoading(true);

      try {
        const apiBikes = await bikeClient.getBikes();

        loadBikes(apiBikes);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        createBikeError(error as Error);
      }
    };

    fetchbikes();
  }, [setIsLoading, loadBikes, bikeClient]);

  const handleDeleteBike = async (bikeId: string) => {
    setIsLoading(true);

    try {
      await bikeClient.deleteBikeById(bikeId);

      deleteBikeFromStore(bikeId);

      deleteBikeSuccess();
    } catch (error) {
      deleteBikeError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="page-container__title">Lista de bicis</h1>
      {isLoading ? (
        <MoonLoader className="spinner" speedMultiplier={0.5} />
      ) : (
        <BikeList bikes={bikes} onDelete={handleDeleteBike} />
      )}
    </>
  );
};

export default BikesListPage;
