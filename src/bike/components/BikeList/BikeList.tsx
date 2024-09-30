import React from "react";
import { Bike } from "../../types";
import BikeCard from "../BikeCard/BikeCard.js";
import "./BikeList.css";

interface BikeListProps {
  bikes: Bike[];
  onDelete: (bikeId: string) => void;
}

const BikeList = ({ bikes, onDelete }: BikeListProps): React.ReactElement => {
  return (
    <ul className="bike-list">
      {bikes.map((bike) => {
        return (
          <li className="bike-list__item" key={bike.id}>
            <BikeCard bike={bike} deleteBike={() => onDelete(bike.id)} />
          </li>
        );
      })}
    </ul>
  );
};

export default BikeList;
