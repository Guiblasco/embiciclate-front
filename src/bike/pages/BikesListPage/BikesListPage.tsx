import { useEffect, useMemo } from "react";
import "./BikesListPage.css";
import { BikeClient } from "../../api/BikesClient";
import BikeList from "../../components/BikeList/BikeList";
import useAppStore from "../../../store/useAppStore";
import MoonLoader from "react-spinners/MoonLoader";
import { toast } from "react-toastify";
import Toast from "../../../components/Toasts/Toast";

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
        toast.error("No ha sido posible cargar las bicis");
        throw error;
      }
    };

    fetchbikes();
  }, [setIsLoading, loadBikes, bikeClient]);

  return (
    <main className="page-container">
      <h1 className="page-container__title">Lista de bicis</h1>
      {isLoading ? (
        <MoonLoader color="#334e31" size={85} speedMultiplier={0.5} />
      ) : (
        <BikeList bikes={bikes} />
      )}
      {error ? <Toast /> : ""}
    </main>
  );
};

export default BikesListPage;
