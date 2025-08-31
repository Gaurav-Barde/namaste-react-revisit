import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("ResCard test cases", () => {
  it("Should render ResCard component with props", () => {
    render(<ResCard resData={MOCK_DATA} />);
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();
  });
});
