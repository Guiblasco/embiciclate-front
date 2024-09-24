import { useEffect, useMemo } from "react";
import { BikeClient } from "../../api/BikesClient";
import BikeList from "../../components/BikeList/BikeList";
import useAppStore from "../../../store/useAppStore";
import MoonLoader from "react-spinners/MoonLoader";
import "./BikesListPage.css";
import { createBikeError } from "../../../components/Toasts/createBike/notifyCreateBike";
import { ToastContainer } from "react-toastify";

const BikesListPage = (): React.ReactElement => {
  const bikeClient = useMemo(() => new BikeClient(), []);

  const { bikes, loadBikes, isLoading, setIsLoading } = useAppStore();

  const error = new Error(`No ha sido posible cargar las bicis`);

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

        throw error;
      }
    };

    fetchbikes();
  }, [setIsLoading, loadBikes, bikeClient]);

  return (
    <>
      <h1 className="page-container__title">Lista de bicis</h1>
      {isLoading ? (
        <MoonLoader className="spinner" speedMultiplier={0.5} />
      ) : (
        <BikeList bikes={bikes} />
      )}
      {error ? <ToastContainer /> : ""}
    </>
  );
};

export default BikesListPage;
