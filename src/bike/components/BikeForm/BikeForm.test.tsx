import { render, screen } from "@testing-library/react";
import BikeForm from "./BikeForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Given the BikeForm component", () => {
  const user = userEvent.setup();
  const submitBikeMock = vi.fn();
  const brandLabelRegExp = new RegExp(/marca:/i);
  const wheelSizeLabelRegExp = new RegExp(/tamaño de rueda:/i);
  const specsLabelRegExp = new RegExp(/especificaciones/i);

  describe("When it is rendered", () => {
    test("Then it showld show 'Marca:', 'Tamaño de rueda:' and 'Especificaciones:' as a laber for a text box", () => {
      render(
        <MemoryRouter>
          <BikeForm submitBike={submitBikeMock} />
        </MemoryRouter>,
      );

      const brandLabel = screen.getByRole("textbox", {
        name: brandLabelRegExp,
      });
      const wheelSizeLabel = screen.getByRole("textbox", {
        name: wheelSizeLabelRegExp,
      });
      const specsLabel = screen.getByRole("textbox", {
        name: specsLabelRegExp,
      });

      expect(brandLabel).toBeInTheDocument();
      expect(wheelSizeLabel).toBeInTheDocument();
      expect(specsLabel).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Crear'", () => {
      const buttonTextRegExp = new RegExp(/crear/i);

      render(
        <MemoryRouter>
          <BikeForm submitBike={submitBikeMock} />
        </MemoryRouter>,
      );
      const buttonText = screen.getByRole("button", { name: buttonTextRegExp });

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When the user enters 'Merida' in 'Marca' field", () => {
    test("Then it should show 'Merida' inside the field", async () => {
      render(
        <MemoryRouter>
          <BikeForm submitBike={submitBikeMock} />
        </MemoryRouter>,
      );
      const brandField = screen.getByLabelText(brandLabelRegExp);

      await user.type(brandField, "Merida");

      expect(brandField).toHaveValue("Merida");
    });
  });

  describe("When the user enters 'Bici de montaña con doble suspensión' in 'Especificaciones:' field", () => {
    test("Then it should show 'Bici de montaña con doble suspensión' inside the field", async () => {
      render(
        <MemoryRouter>
          <BikeForm submitBike={submitBikeMock} />
        </MemoryRouter>,
      );
      const specsField = screen.getByLabelText(specsLabelRegExp);

      await user.type(specsField, "Bici de montaña con doble suspensión");

      expect(specsField).toHaveValue("Bici de montaña con doble suspensión");
    });
  });

  describe("When the user enters '29' in 'Tamaño de rueda:' field", () => {
    test("Then it should show '29' inside the field", async () => {
      render(
        <MemoryRouter>
          <BikeForm submitBike={submitBikeMock} />
        </MemoryRouter>,
      );
      const wheelSizeField = screen.getByLabelText(wheelSizeLabelRegExp);

      await user.type(wheelSizeField, "29");

      expect(wheelSizeField).toHaveValue("29");
    });
  });
});
