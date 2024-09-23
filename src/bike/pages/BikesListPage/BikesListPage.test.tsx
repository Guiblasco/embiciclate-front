import { render, screen } from "@testing-library/react";
import BikesListPage from "./BikesListPage";
import { MemoryRouter } from "react-router-dom";

describe("Given the BikesListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Lista de bicis' in a heading", () => {
      const bikesListPageRegExp = new RegExp(/lista de bicis/, "i");

      render(
        <MemoryRouter>
          <BikesListPage />
        </MemoryRouter>,
      );

      const bikesListPageTitle = screen.getByRole("heading", {
        name: bikesListPageRegExp,
      });

      expect(bikesListPageTitle).toBeInTheDocument();
    });
  });
  describe("When it is rendered", () => {
    test("Then it should show 'Trek' and 'Cannondale' inside their headings", async () => {
      const trekBrandRegExp = new RegExp(/trek/i);
      const cannondaleBrandRegExp = new RegExp(/cannondale/i);

      render(<BikesListPage />);

      const trekBrand = await screen.findByRole("heading", {
        name: trekBrandRegExp,
      });
      const cannondaleBrand = await screen.findByRole("heading", {
        name: cannondaleBrandRegExp,
      });

      expect(trekBrand).toBeInTheDocument();
      expect(cannondaleBrand).toBeInTheDocument();
    });
  });
});
