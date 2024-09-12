import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'EMBICICLATE' as a text", () => {
      const titleRegExp = new RegExp("embiciclate", "i");

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const headerTitle = screen.getByText(titleRegExp);

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
