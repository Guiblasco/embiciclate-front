import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'EMBICICLATE' inside a heading", () => {
      render(<Header />);

      const headerTitle = screen.getByRole("heading", { name: /embiciclate/i });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
