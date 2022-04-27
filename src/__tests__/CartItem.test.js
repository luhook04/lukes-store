import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/cart/CartItem";
import "@testing-library/jest-dom";

describe("CartItem", () => {
  it("button click calls incrementItem function", async () => {
    const incrementItem = jest.fn();
    const decrementItem = jest.fn();

    render(
      <CartItem
        name="shirt"
        price={10}
        quantity={3}
        image="null"
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
    );

    const button = screen.getByRole("button", { name: "+" });

    await userEvent.click(button);
    await userEvent.click(button);

    expect(incrementItem).toHaveBeenCalledTimes(2);
  });
  it("button click calls decrementItem function", async () => {
    const decrementItem = jest.fn();
    const incrementItem = jest.fn();

    render(
      <CartItem
        name="shirt"
        price={10}
        quantity={3}
        image="null"
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
    );

    const button = screen.getByRole("button", { name: "-" });

    await userEvent.click(button);
    await userEvent.click(button);

    expect(decrementItem).toHaveBeenCalledTimes(2);
  });
});
