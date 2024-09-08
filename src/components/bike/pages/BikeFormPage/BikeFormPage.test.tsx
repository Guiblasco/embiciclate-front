import { render, screen } from "@testing-library/react";
import BikesFormPage from "./BikeFormPage";

describe("Given the BikeFormPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Crear una bici' in a heading", () => {
      const bikeFormPageRegExp = new RegExp(/crear una bici/, "i");

      render(<BikesFormPage />);

      const bikeFormPageTitle = screen.getByRole("heading", {
        name: bikeFormPageRegExp,
      });

      expect(bikeFormPageTitle).toBeInTheDocument();
    });
  });
});
