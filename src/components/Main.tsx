import React from "react";
import { Posts } from "./Posts";
import { FormAddPost } from "./FormAddPost";

export function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}
