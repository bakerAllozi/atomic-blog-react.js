import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { faker } from "@faker-js/faker";

interface Post {
  title: string;
  body: string;
}

interface PostContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onClearPosts: () => void;
  createRandomPost: () => Post;
  isFakeDark: boolean;
  setIsFakeDark: React.Dispatch<React.SetStateAction<boolean>>;
  searchedPosts: Post[];
  handleAddPost: (post: Post) => void;
  posts: Post[];
}

interface ProviderProps {
  children: ReactNode;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostProvider({ children }: ProviderProps) {
  const [posts, setPosts] = useState<Post[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [isFakeDark, setIsFakeDark] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchedPosts = searchQuery.length
    ? posts.filter((post) =>
        `${post.title} ${post.body}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : posts;

  const handleAddPost = (post: Post) => setPosts((prev) => [post, ...prev]);

  const handleClearPosts = () => setPosts([]);

  useEffect(() => {
    if (isFakeDark) {
      document.documentElement.classList.add("fake-dark-mode");
    } else {
      document.documentElement.classList.remove("fake-dark-mode");
    }
  }, [isFakeDark]);

  return (
    <PostContext.Provider
      value={{
        posts,
        searchedPosts,
        handleAddPost,
        searchQuery,
        setSearchQuery,
        onClearPosts: handleClearPosts,
        createRandomPost,
        isFakeDark,
        setIsFakeDark,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (!context) throw new Error("usePosts must be used within a PostProvider");
  return context;
}

export { PostProvider, usePosts };
