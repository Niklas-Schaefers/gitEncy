import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchField from "./SearchField";

test("renders SearchField", () => {
  render(
    <SearchField value="" onChange={console.log} placeholder="Search..." />
  );
  expect(screen.getByRole("textbox")).toHaveProperty(
    "placeholder",
    "Search..."
  );
});

test("calls onChange with value", () => {
  const handleChange = jest.fn();
  render(
    <SearchField value="" placeholder="Search..." onChange={handleChange} />
  );

  fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
  expect(handleChange).toBeCalledWith("test");
});
