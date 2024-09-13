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
        src={imageUrl}
        alt={alternativeText}
        width={330}
        height={185}
      />
      <div className="bike__information">
        <h2 className="bike__brand">{brand} |</h2>
        <h2 className="bike__model">{model} |</h2>
        <h2 className="bike__mode">{mode}</h2>
      </div>
    </article>
  );
};

export default BikeCard;
