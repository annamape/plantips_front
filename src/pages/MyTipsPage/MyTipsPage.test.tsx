import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { MyTipsPage } from "./MyTipsPage";

describe("Given the MyTipsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the title 'My tips'", () => {
      const expectedTitle = /my tips/i;

      renderWithProviders(<MyTipsPage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});