import "@testing-library/jest-dom";
import { add } from "../Test2";

test("add() should return the sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});
