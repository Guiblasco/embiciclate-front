import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  const bikesRegExp = new RegExp(/bicis/, "i");
  const addRegExp = new RegExp(/añadir/, "i");
  describe("When it is rendered", () => {
    test("Then it should show 2 links with the text 'Bicis' and 'Añadir'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const bikesLink = screen.getByRole("link", { name: bikesRegExp });
      const addLink = screen.getByRole("link", { name: addRegExp });

      expect(bikesLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
    });
  });
});
