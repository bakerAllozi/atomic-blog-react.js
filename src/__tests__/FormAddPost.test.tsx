import React from "react";
import { render, screen } from "@testing-library/react";
import Test from "../Test";
import "@testing-library/jest-dom";
import { add, subtract } from "../Test2";
import { Footer } from "../components/Footer";
import { PostProvider } from "../PostContext";
import { FormAddPost } from "../components/FormAddPost";

describe("test archive", () => {
  test("app have Add post", () => {
    render(
      <PostProvider>
        <FormAddPost />
      </PostProvider>
    );
    // screen.debug();
    expect(
      screen.getByRole("button", { name: "Add post" })
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
