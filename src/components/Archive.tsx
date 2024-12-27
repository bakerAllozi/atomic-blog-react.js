import React, { useState } from "react";
import { usePosts } from "../PostContext";
export function Archive() {
  const { handleAddPost, createRandomPost } = usePosts();

  const [posts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => handleAddPost(post)}>
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
