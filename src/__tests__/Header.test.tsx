import React from "react";
import { render, screen } from "@testing-library/react";
import Test from "../Test";
import "@testing-library/jest-dom";
import { add, subtract } from "../Test2";
import { Footer } from "../components/Footer";

test("add() should return the sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test("subtract() should return the difference of two numbers", () => {
  expect(subtract(5, 4)).toBe(1);
  expect(subtract(0, 7)).toBe(-7);
});

test("inclod baker", () => {
  render(<Test />);
  const textElement = screen.getByText(/baker/i);
  expect(textElement).toBeInTheDocument();
});

test("is baker in footer", () => {
  render(<Footer />);
  const textElement = screen.getByText(/bakerAllozi/i);
  expect(textElement).toBeInTheDocument();
});
