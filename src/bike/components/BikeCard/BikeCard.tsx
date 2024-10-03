import React from "react";
import { BsTrash } from "react-icons/bs";
import { Bike } from "../../types";
import "./bikeCard.css";
import { useNavigate } from "react-router-dom";

interface BikeCardProps {
  bike: Bike;
  deleteBike: () => void;
}

const BikeCard = ({
  bike: { brand, alternativeText, imageUrl, mode, model, id },
  deleteBike,
}: BikeCardProps): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <article className="bike">
      <button
        onClick={() => {
          navigate(`/bicis/${id}`);
        }}
      >
        <img
          className="bike__image"
          loading="lazy"
          src={imageUrl}
          alt={alternativeText}
          width={330}
          height={185}
        />
      </button>
      <h2 className="bike__information">
        <span className="bike__brand">{brand}</span>
        <span className="bike__model">{model}</span>
        <span className="bike__mode">{mode}</span>
        <button
          className="bike__button"
          aria-label="borrar bici"
          onClick={deleteBike}
        >
          <BsTrash />
        </button>
      </h2>
    </article>
  );
};

export default BikeCard;
