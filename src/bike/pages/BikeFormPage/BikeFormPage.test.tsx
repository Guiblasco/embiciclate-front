import { render, screen } from "@testing-library/react";
import BikesFormPage from "./BikeFormPage";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Bounce, ToastContainer } from "react-toastify";
import { http, HttpResponse } from "msw";
import server from "../../../mocks/server";
import { Bike } from "../../types";
import trekBikeMock from "../../../mocks/bikesMock";

describe("Given the BikeFormPage component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BikesFormPage />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </MemoryRouter>,
    );
  });

  describe("When it is rendered", () => {
    test("Then it should show 'Crear una bici' in a heading", () => {
      const bikeFormPageRegExp = new RegExp(/crear una bici/, "i");

      const bikeFormPageTitle = screen.getByRole("heading", {
        name: bikeFormPageRegExp,
      });

      expect(bikeFormPageTitle).toBeInTheDocument();
    });
  });

  describe("When the user fills de form", () => {
    const user = userEvent.setup();

    const fillAndSubmit = async () => {
      const brand = screen.getByLabelText(/marca/i);
      const model = screen.getByLabelText(/modelo/i);
      const mode = screen.getByLabelText(/disciplina/i);
      const specs = screen.getByText(/especificaciones/i);
      const material = screen.getByLabelText(/material/i);
      const wheelSize = screen.getByLabelText(/tamaño de rueda/i);
      const imageUrl = screen.getByLabelText(/URL de la imagen/i);
      const alternativeText = screen.getByLabelText(/texto alternativo/i);

      await user.type(brand, "Trek");
      await user.type(model, "Madone sl 6");
      await user.type(mode, "Carretera");
      await user.type(
        specs,
        "La Madone SL 6 Disc ofrece un rendimiento aerodinámico avanzado y las sensaciones de nuestra bicicleta de competición definitiva, aunque a un precio más asequible. Incorpora ruedas aerodinámicas, una rótula IsoSpeed que absorbe las irregularidades de la carretera, potentes frenos de disco hidráulico, y una estética que invita a rodar a toda velocidad.",
      );
      await user.type(material, "Carbon");
      await user.type(wheelSize, "28");
      await user.type(
        imageUrl,
        `https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSL6Disc_20_28714_A_Portrait`,
      );
      await user.type(alternativeText, "una bici amarilla y negra");

      const submitButton = screen.getByRole("button", { name: /crear/i });

      await user.click(submitButton);
    };

    describe("When the bike is created", () => {
      test("Then it should show the message: 'Éxito al crear la bici!'", async () => {
        const expectedMessage = /Éxito al crear la bici/i;

        await fillAndSubmit();

        const successMessage = screen.getByText(expectedMessage);

        expect(successMessage).toBeVisible();
      }, 10000);
    });

    describe("When the client throws an error when creating a bike", () => {
      test("Then it should show the message: 'Ha ocurrido un error al crear la bici'", async () => {
        server.use(
          http.post(`${import.meta.env.VITE_API_URL}bikes`, () => {
            return HttpResponse.json<{ newBike: Bike }>(
              {
                newBike: trekBikeMock,
              },
              { status: 409 },
            );
          }),
        );

        const expectedMessage = /Ha ocurrido un error al crear la bici/i;

        await fillAndSubmit();

        const error = screen.getByText(expectedMessage);

        expect(error).toBeVisible();
      }, 10000);
    });
  });
});
