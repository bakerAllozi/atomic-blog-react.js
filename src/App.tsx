import React from "react";

import { usePosts } from "./PostContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Archive } from "./components/Archive";
import { Footer } from "./components/Footer";
function App() {
  const { isFakeDark, setIsFakeDark } = usePosts();

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((prevIsFakeDark) => !prevIsFakeDark)}
        className="btn-fake-dark-mode"
        data-testid="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
