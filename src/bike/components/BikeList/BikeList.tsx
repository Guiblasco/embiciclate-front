import React from "react";
import { Bike } from "../../types";
import BikeCard from "../BikeCard/BikeCard.js";
import "./BikeList.css";

interface BikeListProps {
  bikes: Bike[];
}

const BikeList = ({ bikes }: BikeListProps): React.ReactElement => {
  return (
    <ul className="bike-list">
      {bikes.map((bike) => {
        return (
          <li className="bike-list__item" key={bike.id}>
            <BikeCard bike={bike} />
          </li>
        );
      })}
    </ul>
  );
};

export default BikeList;
