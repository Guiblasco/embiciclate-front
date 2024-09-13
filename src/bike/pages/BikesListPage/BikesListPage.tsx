import { useEffect, useMemo, useState } from "react";
import "./BikesListPage.css";
import { BikeClient } from "../../api/BikesClient";
import { Bike } from "../../types";
import BikeList from "../../components/BikeList/BikeList";

const BikesListPage = (): React.ReactElement => {
  const bikeClient = useMemo(() => new BikeClient(), []);

  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchbikes = async () => {
      const apiBikes = await bikeClient.getBikes();
      setBikes(apiBikes);
    };

    fetchbikes();
  }, [bikeClient]);

  return (
    <main className="page-container">
      <h1 className="page-container__title">Lista de bicis</h1>
      <BikeList bikes={bikes} />
    </main>
  );
};

export default BikesListPage;
