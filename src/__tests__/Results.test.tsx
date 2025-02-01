import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Results } from "../components/Results";
import { PostProvider } from "../PostContext";

test("يجب أن يحتوي `posts` على 100 منشور", () => {
  render(
    <PostProvider>
      <Results />
    </PostProvider>
  );
});
