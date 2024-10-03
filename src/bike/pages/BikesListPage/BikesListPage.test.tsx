import { render, screen } from "@testing-library/react";
import BikesListPage from "./BikesListPage";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import server from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

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

      render(
        <MemoryRouter>
          <BikesListPage />
        </MemoryRouter>,
      );
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
  describe("When user clicks delete button and the bike is successfully deleted", () => {
    test("Then it should show a toast with message 'Bici borrada con éxito!'", async () => {
      render(
        <MemoryRouter>
          <BikesListPage />
          <ToastContainer />
        </MemoryRouter>,
      );

      const deleteButton = await screen.findAllByLabelText(/borrar bici/i);

      const expecteText = /Bici borrada con éxito!/i;

      const user = userEvent.setup();

      await user.click(deleteButton[0]);

      const toast = await screen.findByText(expecteText);

      expect(toast).toBeVisible();
    });
  });

  describe("When user clicks delete button and the bike fails to deleted", () => {
    test("Then it should show a toast with message '", async () => {
      server.use(...errorHandlers);
      render(
        <MemoryRouter>
          <BikesListPage />
          <ToastContainer />
        </MemoryRouter>,
      );

      const deleteButton = await screen.findAllByLabelText(/borrar bici/i);

      const expecteText = /Ha ocurrido un error al borrar la bici/i;

      const user = userEvent.setup();

      await user.click(deleteButton[0]);

      const toast = await screen.findByText(expecteText);

      expect(toast).toBeVisible();
    });
  });
});
