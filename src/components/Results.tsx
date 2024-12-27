import React from "react";
import { usePosts } from "../PostContext";
export function Results() {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}
