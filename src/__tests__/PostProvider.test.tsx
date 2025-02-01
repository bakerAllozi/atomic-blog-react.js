import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { PostProvider } from "../PostContext";
import "@testing-library/jest-dom";
import App from "../App";

import userEvent from "@testing-library/user-event";
import { Header } from "../components/Header";
import { Results } from "../components/Results";

test("يجب أن يحتوي المزود على 30 منشورًا بشكل افتراضي", async () => {
  render(
    <PostProvider>
      <Results />
    </PostProvider>
  );

  const postCount = await screen.findByTestId("post-count");
  expect(postCount).toHaveTextContent("30");
});

test(" أن يحتوي المزود على 30 منشورًا بشكل افتراضي", async () => {
  render(
    <PostProvider>
      <App />
    </PostProvider>
  );

  const postCount = await screen.findByTestId("btn-fake-dark-mode");
  expect(postCount).toHaveTextContent("🌙");
  fireEvent.click(postCount);
  expect(postCount).toHaveTextContent("☀️");
});
test("يجب أن ينظف المنشورات بشكل صحيح عند النقر على زر Clear posts", async () => {
  render(
    <PostProvider>
      <App />
    </PostProvider>
  );

  const AddPost = screen.getByText("Add post");
  const postCount = await screen.findByTestId("post-count");
  const titleInput = screen.getByPlaceholderText("Post title");
  const bodyInput = screen.getByPlaceholderText("Post body");

  await userEvent.type(titleInput, "New Post Title");
  await userEvent.type(bodyInput, "This is the content of the new post.");
  await userEvent.click(AddPost);

  expect(postCount).toHaveTextContent("31");

  const searchInput = screen.getByPlaceholderText("Search posts...");

  await userEvent.type(searchInput, "test");

  expect(searchInput).toHaveValue("test");
});

test("عند النقر على زر Clear posts", async () => {
  render(
    <PostProvider>
      <Header />
    </PostProvider>
  );

  const clearButton = screen.getByText("Clear posts");

  userEvent.click(clearButton);

  const postCount = await screen.findByTestId("post-count");

  expect(postCount).toHaveTextContent("0");
});
