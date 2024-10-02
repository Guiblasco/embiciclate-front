import { render, screen } from "@testing-library/react";
import BikeDetail from "./BikeDetail";
import trekBikeMock from "../../../mocks/bikesMock";

describe("Given the BikeDetail component", () => {
  describe("When it receives a bike", () => {
    beforeEach(() => {
      render(<BikeDetail bike={trekBikeMock} />);
    });

    test("Then it should show the bike mode 'disciplina' as a text", () => {
      const bikeMode = /disciplina/i;
      const mode = screen.getByText(bikeMode);

      expect(mode).toBeVisible();
    });

    test("Then it should show an image with alternative text contains 'una bici de carretera negra y amarilla' ", () => {
      const expectedAlternativeText = /una bici de carretera negra y amarilla/i;
      const alternativeText = screen.getByAltText(expectedAlternativeText);

      expect(alternativeText).toBeVisible();
    });

    test("Then it should show the wheel size of bike as a text '28' ", () => {
      const expectedWheelSize = /28/i;
      const wheelSize = screen.getByText(expectedWheelSize);

      expect(wheelSize).toBeVisible();
    });
  });
});
