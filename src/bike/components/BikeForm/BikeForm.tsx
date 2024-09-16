import React from "react";
import "./BikeForm.css";

const BikeForm = (): React.ReactElement => {
  return (
    <div className="form-container">
      <form className="bike-form">
        <div className="bike-form__form-group">
          <label htmlFor="marca">Marca:</label>
          <input id="marca" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="model">Modelo:</label>
          <input id="model" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="mode">Disciplina:</label>
          <input type="text" id="mode" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="material">Material del cuadro:</label>
          <input type="text" id="material" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="wheel-size">Tamaño de rueda:</label>
          <input id="wheel-size" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="image-url">URL de la imagen:</label>
          <input id="image-url" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="alternative-text">Texto alternativo:</label>
          <input id="alternative-text" required />
        </div>
        <div className="bike-form__form-group">
          <label htmlFor="specs">Especificaciones:</label>
          <textarea id="specs" required />
        </div>
        <button type="submit" className="bike-form__button">
          Send
        </button>
      </form>
    </div>
  );
};

export default BikeForm;
