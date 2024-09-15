import { useEffect, useMemo } from "react";
import "./BikesListPage.css";
import { BikeClient } from "../../api/BikesClient";
import BikeList from "../../components/BikeList/BikeList";
import useAppStore from "../../../store/useAppStore";
import MoonLoader from "react-spinners/MoonLoader";

const BikesListPage = (): React.ReactElement => {
  const bikeClient = useMemo(() => new BikeClient(), []);

  const { bikes, loadBikes, isLoading, setIsLoading } = useAppStore();

  useEffect(() => {
    const fetchbikes = async () => {
      setIsLoading(true);

      try {
        const apiBikes = await bikeClient.getBikes();

        loadBikes(apiBikes);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        throw new Error(`No ha sido posible cargar las bicis ${error}`);
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
    </main>
  );
};

export default BikesListPage;
