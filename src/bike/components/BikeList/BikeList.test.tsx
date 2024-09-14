import { render, screen } from "@testing-library/react";
import { Bike } from "../../types";
import BikeList from "./BikeList";

describe("Given the BikeList component", () => {
  const bikes: Bike[] = [
    {
      id: "1",
      brand: "Trek",
      model: "Madone sl 6",
      material: "Carbon",
      wheelSize: 28,
      alternativeText: "",
      imageUrl: "",
      specs: "",
      mode: "Carretera",
    },
    {
      id: "2",
      brand: "Canondale",
      model: "Scalpel",
      material: "Carbon",
      wheelSize: 29,
      alternativeText: "",
      imageUrl: "",
      specs: "",
      mode: "XC",
    },
  ];
  describe("When it receives 2 bikes with brand is 'Trek' and 'Canondale'", () => {
    test("Then it should show the bike's brand inside a heading", () => {
      const trekBrandRegExp = new RegExp(/trek/i);
      const canondaleBrandRegExp = new RegExp(/canondale/i);

      render(<BikeList bikes={bikes} />);

      const trekBrand = screen.getByRole("heading", {
        name: trekBrandRegExp,
      });
      const canondaleBrand = screen.getByRole("heading", {
        name: canondaleBrandRegExp,
      });

      expect(trekBrand).toBeInTheDocument();
      expect(canondaleBrand).toBeInTheDocument();
    });
  });
  describe("When it receives 2 bikes with model is 'Madone sl 6' and 'Scalpel'", () => {
    test("Then it should show the bike's model inside a heading", () => {
      const madoneModelRegExp = new RegExp(/Madone sl 6/i);
      const scalpelModelRegExp = new RegExp(/Scalpel/i);

      render(<BikeList bikes={bikes} />);

      const madoneModel = screen.getByRole("heading", {
        name: madoneModelRegExp,
      });
      const scalpelModel = screen.getByRole("heading", {
        name: scalpelModelRegExp,
      });

      expect(madoneModel).toBeInTheDocument();
      expect(scalpelModel).toBeInTheDocument();
    });
  });

  describe("When it receives 2 bikes that their mode is 'Carretera' and 'XC'", () => {
    test("Then it should show bike's mode inside a heading", () => {
      const carreteraModeRegExp = new RegExp(/carretera/i);
      const mountainModeRegExp = new RegExp(/xc/i);

      render(<BikeList bikes={bikes} />);

      const carreteraMode = screen.getByRole("heading", {
        name: carreteraModeRegExp,
      });
      const mountainMode = screen.getByRole("heading", {
        name: mountainModeRegExp,
      });

      expect(carreteraMode).toBeInTheDocument();
      expect(mountainMode).toBeInTheDocument();
    });
  });
});
