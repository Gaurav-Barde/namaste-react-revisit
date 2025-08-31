import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../../utils/redux/store";
import Header from "../Header";

describe("Header component test cases", () => {
  it("Should render Header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });

  it("Should render Header component with a Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart-0 items");
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header component with a Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change Login Button to Logout on a click", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
