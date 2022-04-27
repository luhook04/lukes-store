import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

const cart = [
  {
    name     : "socks",
    quantity : 2
  },
  {
    name     : "pants",
    quantity : 5
  },
  {
    name     : "shirt",
    quantity : 1
  }
];
describe("Header", () => {
  it("renders header with correct cart count", () => {
    render(<Header cart={cart} />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("amount").textContent).toMatch("8");
  });
});
