import React from "react";
import { Bike } from "../../types";
import "./BikeDetail.css";

interface BikeDetailProps {
  bike: Bike;
}

const BikeDetail = ({ bike }: BikeDetailProps): React.ReactElement => {
  return (
    <article className="bike-detail">
      <div className="bike-detail__info">
        <span className="data-label">Disciplina:</span>
        <p className="data">{bike.mode}</p>
      </div>
      <img
        className="bike-detail__image"
        src={bike.imageUrl}
        alt={bike.alternativeText}
        loading="lazy"
        width={320}
        height={240}
      />
      <div className="bike-detail__info">
        <span className="data-label">Material del cuadro: </span>
        <p className="data">{bike.material}</p>
      </div>
      <div className="bike-detail__info">
        <span className="data-label">Tamaño de las ruedas:</span>
        <p className="data">{bike.wheelSize}</p>
      </div>
      <div className="bike-detail__info">
        <span className="data-label">Especificaciones:</span>
        <p className="data">{bike.specs}</p>
      </div>
    </article>
  );
};

export default BikeDetail;
