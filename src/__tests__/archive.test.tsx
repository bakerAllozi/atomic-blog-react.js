import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { Archive } from "../components/Archive";
import { PostProvider } from "../PostContext";

describe("test archive", () => {
  test("add() should return the sum of  ", () => {
    render(
      <PostProvider>
        <Archive />
      </PostProvider>
    );
    expect(
      screen.getByRole("heading", { name: /Post archive/i })
    ).toBeInTheDocument();
  });

  // test("subtract() should return the difference of two numbers", () => {
  //   render(<input placeholder="أدخل اسمك" />);
  //   const inputElement = screen.getByRole("textbox");
  //   expect(inputElement).toBeInTheDocument();
  // });

  // test("inclod baker", () => {
  //   render(<Test />);
  //   const textElement = screen.getByText(/baker/i);
  //   expect(textElement).toBeInTheDocument();
  // });
});
