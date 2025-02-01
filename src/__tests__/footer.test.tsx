import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../components/Footer";

test("is baker in footer", () => {
  render(<Footer />);
  const textElement = screen.getByText(/bakerAllozi/i);
  expect(textElement).toBeInTheDocument();
});
