import { useEffect, useMemo } from "react";
import "./BikesListPage.css";
import { BikeClient } from "../../api/BikesClient";
import BikeList from "../../components/BikeList/BikeList";
import useAppStore from "../../../store/useAppStore";

const BikesListPage = (): React.ReactElement => {
  const bikeClient = useMemo(() => new BikeClient(), []);

  const { bikes, loadBikes } = useAppStore();

  useEffect(() => {
    const fetchbikes = async () => {
      try {
        const apiBikes = await bikeClient.getBikes();

        loadBikes(apiBikes);
      } catch (error) {
        throw new Error(`No ha sido posible cargar las bicis ${error}`);
      }
    };

    fetchbikes();
  }, [loadBikes, bikeClient]);

  return (
    <main className="page-container">
      <h1 className="page-container__title">Lista de bicis</h1>
      <BikeList bikes={bikes} />
    </main>
  );
};

export default BikesListPage;
