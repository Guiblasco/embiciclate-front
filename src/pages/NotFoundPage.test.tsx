import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show message 'La página no existe'", () => {
      render(<NotFoundPage />);

      const errorMessage = screen.getByText("La página no existe");

      expect(errorMessage).toBeInTheDocument();
    });

    test("Then it should show an image with alternative text value 'Una bici rota'", () => {
      const imageAlternativeText = "Una bici rota";
      const imageAlternativeTextRegexp = new RegExp(imageAlternativeText, "i");

      render(<NotFoundPage />);

      const notFoundPageImage = screen.getByAltText(imageAlternativeTextRegexp);

      expect(notFoundPageImage).toBeInTheDocument();
    });
  });
});
