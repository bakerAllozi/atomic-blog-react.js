import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tests from "../Tests";

test("يجب أن يزيد `count` عند النقر على الزر", () => {
  render(<Tests />);

  const countElement = screen.getByTestId("count");

  const button = screen.getByRole("button", { name: /click me/i });

  // ✅ تحقق من أن القيمة الأولية هي 0
  expect(countElement).toHaveTextContent("0");

  // 🔥 انقر على الزر
  fireEvent.click(button);

  // ✅ تحقق أن القيمة أصبحت 1 بعد النقر
  expect(countElement).toHaveTextContent("2");

  // 🔥 انقر مرة أخرى
  fireEvent.click(button);

  // ✅ تحقق أن القيمة أصبحت 2 بعد النقر الثاني
  expect(countElement).toHaveTextContent("4");
});
