import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderSearch from "./HeaderSearch";

test("HeaderSearch onSubmit button triggers the onSubmit function", () => {
  const handleSubmit = jest.fn();
  render(<HeaderSearch onSubmit={handleSubmit} />);

  fireEvent.submit(screen.getByTestId("test1"));
  expect(handleSubmit).toHaveBeenCalled();
});
