import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";

jest.mock("./components/store/Products", () => () => {
  return <h2>Hi</h2>;
});

describe("App", () => {
  it("Renders Products component after button click", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Shop Now!" });
    expect(
      screen.queryByRole("heading", { name: "Hi" })
    ).not.toBeInTheDocument();
    await userEvent.click(button);
    expect(
      screen.getByRole("heading", { name: "Hi" })
    ).toBeInTheDocument();
  });
});
