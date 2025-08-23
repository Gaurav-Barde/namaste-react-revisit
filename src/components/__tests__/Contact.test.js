import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load Contact component", () => {
  render(<Contact />);
  const renderedComp = screen.getByRole("heading");
  expect(renderedComp).toBeInTheDocument();
});
