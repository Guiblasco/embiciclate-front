import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import router from "../../router/router";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should be show 'Lista de bicis' in a heading", async () => {
      const titleRegExp = new RegExp(/lista de bicis/, "i");

      render(<RouterProvider router={router} />);

      const title = await screen.findByRole("heading", { name: titleRegExp });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When user clicks in 'Añadir'", () => {
    test("Then it should be show 'Crear una bici' in a heading", async () => {
      const user = userEvent.setup();
      const addRegExp = new RegExp(/añadir/, "i");
      const bikeFormPageRegExp = new RegExp(/crear una bici/, "i");

      render(<RouterProvider router={router} />);

      const addLink = await screen.findByRole("link", { name: addRegExp });

      await user.click(addLink);

      const bikeFormPage = await screen.findByRole("heading", {
        name: bikeFormPageRegExp,
      });

      expect(bikeFormPage).toBeInTheDocument();
    });
  });
});
