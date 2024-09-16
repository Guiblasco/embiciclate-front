import { render, screen } from "@testing-library/react";
import BikeForm from "./BikeForm";

describe("Given the BikeForm component", () => {
  describe("When it is rendered", () => {
    test("Then it showld show 'Marca:', 'Tamaño de rueda' and 'Especificaciones' as a laber for a text box", () => {
      const brandLabelRegExp = new RegExp(/marca:/i);
      const wheelSizeLabelRegExp = new RegExp(/tamaño de rueda:/i);
      const specsLabelRegExp = new RegExp(/especificaciones/i);

      render(<BikeForm />);

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

      render(<BikeForm />);

      const buttonText = screen.getByRole("button", { name: buttonTextRegExp });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
