import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import RestaurantCardContainer from "../RestaurantCardContainer";
import MockData from "./mocks/resListMock.json";
import UserContext from "../../utils/contexts/UserContext";

beforeEach(() => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      ok: true,
      json: () => {
        return Promise.resolve(MockData);
      },
    });
  });
});

afterEach(() => jest.resetAllMocks());

describe("Testcases for filter restaurants with search", () => {
  it("Should return 1 restaurant if user search pizza", async () => {
    const mockCtx = { userName: "Gaurav", setUserName: jest.fn() };
    await act(async () =>
      render(
        <BrowserRouter>
          <UserContext.Provider value={mockCtx}>
            <RestaurantCardContainer />
          </UserContext.Provider>
        </BrowserRouter>
      )
    );
    const searchButton = screen.getByRole("button", {
      name: /Search/,
    });
    const searchInput = screen.getByPlaceholderText(/Search Restaurants/);
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchButton);
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(1);
  });
});
