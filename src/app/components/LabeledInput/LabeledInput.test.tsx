import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LabeledInput from "./LabeledInput";

test("renders LabeledInput", () => {
  render(
    <LabeledInput label="" placeholder="Hello" value="" onChange={jest.fn()} />
  );
  expect(screen.getByRole("textbox")).toHaveProperty("placeholder", "Hello");
});

test("calls onChange with value", () => {
  const handleChange = jest.fn();
  render(
    <LabeledInput
      label=""
      placeholder="Keyword..."
      value=""
      onChange={handleChange}
    />
  );

  fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
  expect(handleChange).toBeCalledWith("test");
});
