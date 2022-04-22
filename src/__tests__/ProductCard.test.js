import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/store/ProductCard";
import "@testing-library/jest-dom";

describe("Product Card", () => {
  it("calls addItem function on button click", async () => {
    const addItem = jest.fn();

    render(
      <ProductCard
        name={"gloves"}
        price={10}
        image={"null"}
        addItem={addItem}
      />
    );

    const button = screen.getByRole("button", { name: "Add to cart" });

    await userEvent.click(button);
    await userEvent.click(button);

    expect(addItem).toHaveBeenCalledTimes(2);
  });
});
