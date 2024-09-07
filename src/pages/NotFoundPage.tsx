import React from "react";
import "./NotFoundPage.css";

export const NotFoundPage = (): React.ReactElement => {
  return (
    <div className="error-container">
      <h2 className="error-container__title">La página no existe</h2>
      <img
        src="media/bici-rota-404.webp"
        alt="Una bici rota"
        width={330}
        height={177}
      ></img>
    </div>
  );
};
