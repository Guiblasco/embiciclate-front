import { render, screen } from "@testing-library/react";
import { Bike } from "../../types";
import BikeCard from "./BikeCard";
import { MemoryRouter } from "react-router-dom";

describe("Given the BikeCard component", () => {
  const deleteBike = vi.fn();
  const bike: Bike = {
    id: "",
    brand: "Canyon",
    model: "Ultimate CF SL 8",
    alternativeText:
      "Bicicleta de carretera Canyon Ultimate CF SL 8 de carbono",
    specs: "",
    imageUrl: "",
    material: "",
    wheelSize: 0,
    mode: "Carretera",
  };
  describe("When it receives a bike with brand 'Canyon'", () => {
    test("Then it should show bike's brand 'Canyon' as a text", () => {
      const bikeBrandRegExp = new RegExp(bike.brand, "i");

      render(
        <MemoryRouter>
          <BikeCard bike={bike} deleteBike={deleteBike} />
        </MemoryRouter>,
      );

      const bikeBrand = screen.getByText(bikeBrandRegExp);

      expect(bikeBrand).toBeInTheDocument();
    });
  });

  describe("When it receives a bike with model is 'Ultimate CF SL 8'", () => {
    test("Then it should show bike's model 'Ultimate CF SL 8' as a text", () => {
      const bikeModelRegExp = new RegExp(bike.model, "i");

      render(
        <MemoryRouter>
          <BikeCard bike={bike} deleteBike={deleteBike} />
        </MemoryRouter>,
      );

      const bikeModel = screen.getByText(bikeModelRegExp);

      expect(bikeModel).toBeInTheDocument();
    });
  });

  describe("When it receives a bike image with alternative text 'Bicicleta de carretera Canyon Ultimate CF SL 8 de carbono'", () => {
    test("Then it should show a image with alternative text value 'Bicicleta de carretera Canyon Ultimate CF SL 8 de carbono'", () => {
      const bikeImageAlternativeTextRegExp = new RegExp(
        bike.alternativeText,
        "i",
      );

      render(
        <MemoryRouter>
          <BikeCard bike={bike} deleteBike={deleteBike} />
        </MemoryRouter>,
      );
      const bikeAlternativeText = screen.getByAltText(
        bikeImageAlternativeTextRegExp,
      );

      expect(bikeAlternativeText).toBeInTheDocument();
    });
  });

  describe("When it receives a bike with mode is 'Carretera'", () => {
    test("Then it should show bike's mode 'Carretera' as a text", () => {
      const bikeModeRegExp = new RegExp(bike.mode, "i");

      render(
        <MemoryRouter>
          <BikeCard bike={bike} deleteBike={deleteBike} />
        </MemoryRouter>,
      );
      const bikeMode = screen.getByText(bikeModeRegExp);

      expect(bikeMode).toBeInTheDocument();
    });
  });

  describe("When it receives a bike", () => {
    test("Then it should show a button with the name 'borrar bici'", () => {
      const butonName = /borrar bici/i;

      render(
        <MemoryRouter>
          <BikeCard bike={bike} deleteBike={deleteBike} />
        </MemoryRouter>,
      );
      const button = screen.getByRole("button", { name: butonName });

      expect(button).toBeVisible();
    });
  });
});
