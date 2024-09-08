import { render, screen } from "@testing-library/react";
import BikesListPage from "./BikesListPage";

describe("Given the BikesListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Lista de bicis' in a heading", () => {
      const BikesListPageRegExp = new RegExp(/lista de bicis/, "i");

      render(<BikesListPage />);

      const BikesListPageTitle = screen.getByRole("heading", {
        name: BikesListPageRegExp,
      });

      expect(BikesListPageTitle).toBeInTheDocument();
    });
  });
});
