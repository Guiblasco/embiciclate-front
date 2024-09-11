import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'EMBICICLATE' inside a heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const headerTitle = screen.getByRole("generic", { name: /embiciclate/i });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
