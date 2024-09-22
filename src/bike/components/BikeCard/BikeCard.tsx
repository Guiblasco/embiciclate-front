import React from "react";
import { Bike } from "../../types";
import "./bikeCard.css";

interface BikeCardProps {
  bike: Bike;
}

const BikeCard = ({
  bike: { brand, alternativeText, imageUrl, mode, model },
}: BikeCardProps): React.ReactElement => {
  return (
    <article className="bike">
      <img
        className="bike__image"
        loading="lazy"
        src={imageUrl}
        alt={alternativeText}
        width={330}
        height={185}
      />
      <h2 className="bike__information">
        <span className="bike__brand">{brand} |</span>
        <span className="bike__model">{model} |</span>
        <span className="bike__mode">{mode}</span>
      </h2>
    </article>
  );
};

export default BikeCard;
