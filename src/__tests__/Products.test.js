import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../components/store/Products";
import "@testing-library/jest-dom";

//setup props
const store = [
  {
    id    : 1,
    title : "scarf",
    price : 10,
    image : null
  },
  {
    id    : 2,
    title : "gloves",
    price : 15,
    image : null
  },
  {
    id    : 3,
    title : "socks",
    price : 20,
    image : null
  }
];

describe("Products", () => {
  it("renders correct product names", () => {
    render(<Products store={store} />);
    expect(
      screen.getByRole("heading", { name: "scarf" }).textContent
    ).toMatch("scarf");

    expect(
      screen.getByRole("heading", { name: "gloves" }).textContent
    ).toMatch("gloves");

    expect(
      screen.getByRole("heading", { name: "socks" }).textContent
    ).toMatch("socks");
  });

  it("renders correct product prices", () => {
    render(<Products store={store} />);
    expect(
      screen.getByRole("heading", { name: "$10.00" }).textContent
    ).toMatch("$10.00");
    expect(
      screen.getByRole("heading", { name: "$15.00" }).textContent
    ).toMatch("$15.00");
    expect(
      screen.getByRole("heading", { name: "$20.00" }).textContent
    ).toMatch("$20.00");
  });

  it("renders correct pictures", () => {
    render(<Products store={store} />);
    expect(screen.getByAltText("scarf")).toBeInTheDocument();
    expect(screen.getByAltText("gloves")).toBeInTheDocument();
    expect(screen.getByAltText("socks")).toBeInTheDocument();
  });
});
