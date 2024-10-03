import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BikeDetailPage from "./BikeDetailPage";

describe("Given the BikeFormPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Crear una bici' in a heading", () => {
      const expectedTitle = new RegExp(/Detalles de la bici/, "i");

      render(
        <MemoryRouter>
          <BikeDetailPage />
        </MemoryRouter>,
      );
      const tite = screen.getByRole("heading", { name: expectedTitle });

      expect(tite).toBeInTheDocument();
    });
  });
});
