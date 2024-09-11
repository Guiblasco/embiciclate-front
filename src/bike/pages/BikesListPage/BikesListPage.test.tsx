import { render, screen } from "@testing-library/react";
import BikesListPage from "./BikesListPage";

describe("Given the BikesListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Lista de bicis' in a heading", () => {
      const bikesListPageRegExp = new RegExp(/lista de bicis/, "i");

      render(<BikesListPage />);

      const bikesListPageTitle = screen.getByRole("heading", {
        name: bikesListPageRegExp,
      });

      expect(bikesListPageTitle).toBeInTheDocument();
    });
  });
});
