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
      <img src={imageUrl} alt={alternativeText} width={330} height={220} />
      <div className="bike__container">
        <span className="bike__brand">{brand} |</span>
        <span className="bike__model">{model} |</span>
        <span className="bike__mode">{mode}</span>
      </div>
    </article>
  );
};

export default BikeCard;
