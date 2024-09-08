import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import router from "../../router/router";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should be redirected to the path '/bikes' and show 'Lista de bicis' in a heading", () => {
      const subtitleRegExp = new RegExp(/lista de bicis/, "i");

      render(<RouterProvider router={router} />);

      const subtitle = screen.getByRole("heading", { name: subtitleRegExp });

      expect(subtitle).toBeInTheDocument();
    });
  });

  describe("When user clicks in 'Añadir'", () => {
    test("Then it should be redirected to the path '/add' and show 'Crear una bici' in a heading", async () => {
      const user = userEvent.setup();
      const addRegExp = new RegExp(/añadir/, "i");
      const bikeFormPageRegExp = new RegExp(/crear una bici/, "i");

      render(<RouterProvider router={router} />);

      const addLink = screen.getByRole("link", { name: addRegExp });

      await user.click(addLink);

      const bikeFormPage = screen.getByRole("heading", {
        name: bikeFormPageRegExp,
      });

      expect(bikeFormPage).toBeInTheDocument();
    });
  });
});
