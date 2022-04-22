import ShoppingCart from "../components/cart/ShoppingCart";
import React from "react";
import { render, screen } from "@testing-library/react";

// setup props
const cart = [
  {
    name  : "hat",
    price : 10
  },
  {
    name  : "shirt",
    price : 20
  },
  {
    name  : "pants",
    price : 30
  }
];

describe("Shopping Cart", () => {
  it("renders with correct name", () => {
    render(<ShoppingCart cart={cart} />);

    expect(
      screen.getByRole("heading", { name: "hat" }).textContent
    ).toMatch("hat");
    expect(
      screen.getByRole("heading", { name: "shirt" }).textContent
    ).toMatch("shirt");
    expect(
      screen.getByRole("heading", { name: "pants" }).textContent
    ).toMatch("pants");
  });

  it("doesn't render message when cart has items", () => {
    render(<ShoppingCart cart={cart} />);
    expect(
      screen.queryByRole("heading", {
        name : "Your cart is currently empty"
      })
    ).not.toBeInTheDocument();
  });

  it("renders message when cart is empty", () => {
    render(<ShoppingCart cart={[]} />);
    expect(
      screen.getByRole("heading", { name: "Your cart is currently empty" })
        .textContent
    ).toMatch("Your cart is currently empty");
  });
});
