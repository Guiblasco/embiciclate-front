import React, { useState } from "react";
import { BikeFormData } from "../../types";
import "./BikeForm.css";
import { useNavigate } from "react-router-dom";

interface BikeFormProps {
  submitBike: (bikeFormData: BikeFormData) => void;
}

const bikeFormDataInitialState: BikeFormData = {
  alternativeText: "",
  brand: "",
  imageUrl: "",
  material: "",
  mode: "",
  model: "",
  specs: "",
  wheelSize: "",
};

const BikeForm = ({ submitBike }: BikeFormProps): React.ReactElement => {
  const navigate = useNavigate();
  const [bikeFormData, setBikeFormData] = useState<BikeFormData>(
    bikeFormDataInitialState,
  );

  const handleSubmit = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setBikeFormData((previuosBikeFormData) => ({
      ...previuosBikeFormData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className="form-container">
      <form
        className="bike-form"
        onSubmit={async (event) => {
          event.preventDefault();

          submitBike(bikeFormData);

          setBikeFormData(bikeFormDataInitialState);
          navigate("/bikes");
        }}
      >
        <div className="bike-form__form-group">
          <label htmlFor="brand">Marca:</label>
          <input
            id="brand"
            value={bikeFormData.brand}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            value={bikeFormData.model}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="mode">Disciplina:</label>
          <input
            type="text"
            id="mode"
            value={bikeFormData.mode}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="material">Material del cuadro:</label>
          <input
            type="text"
            id="material"
            value={bikeFormData.material}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="wheelSize">Tamaño de rueda:</label>
          <input
            type="text"
            id="wheelSize"
            value={bikeFormData.wheelSize}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="imageUrl">URL de la imagen:</label>
          <input
            type="text"
            id="imageUrl"
            value={bikeFormData.imageUrl}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="alternativeText">Texto alternativo:</label>
          <input
            type="text"
            id="alternativeText"
            value={bikeFormData.alternativeText}
            onChange={handleSubmit}
            required
          />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="specs">Especificaciones:</label>
          <textarea
            id="specs"
            value={bikeFormData.specs}
            onChange={handleSubmit}
            required
          />
        </div>
        <button type="submit" className="bike-form__button">
          Crear
        </button>
      </form>
    </div>
  );
};

export default BikeForm;
