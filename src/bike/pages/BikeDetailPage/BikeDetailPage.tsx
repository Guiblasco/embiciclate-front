import { useNavigate, useParams } from "react-router-dom";
import BikeDetail from "../../components/BikeDetail/BikeDetail";
import MoonLoader from "react-spinners/MoonLoader";
import { BikeClient } from "../../api/BikesClient";
import useAppStore from "../../../store/useAppStore";
import { useEffect, useMemo } from "react";
import { detailBikeError } from "../../../components/Toasts/deleteBike/notifyDeleteBike";

const BikeDetailPage = (): React.ReactElement => {
  const { bikeId } = useParams();
  const navigate = useNavigate();
  const bikeClient = useMemo(() => new BikeClient(), []);

  const { currentBike, loadCurrentBike, isLoading, setIsLoading } =
    useAppStore();

  useEffect(() => {
    const fetchCurrentBike = async () => {
      setIsLoading(true);

      try {
        const currentBike = await bikeClient.getBikeById(bikeId!);

        loadCurrentBike(currentBike);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        navigate(`/`, {});

        detailBikeError(error as Error);
      }
    };

    fetchCurrentBike();
  }, [setIsLoading, bikeClient, bikeId, loadCurrentBike, navigate]);

  return (
    <>
      <h1 className="page-container__title">Detalles de la bici</h1>

      <h2>
        {currentBike.brand} {currentBike.model}
      </h2>
      {isLoading ? (
        <MoonLoader className="spinner" speedMultiplier={0.5} />
      ) : (
        <BikeDetail bike={currentBike} />
      )}
    </>
  );
};

export default BikeDetailPage;
