import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact component test cases", () => {
  test("Should load Contact component", () => {
    render(<Contact />);
    const renderedComp = screen.getByRole("heading");
    expect(renderedComp).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load 3 input inside Contact component", () => {
    render(<Contact />);
    const emailInput = screen.getAllByRole("textbox");
    expect(emailInput.length).toBe(3);
  });
});
