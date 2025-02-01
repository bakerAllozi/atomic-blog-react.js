import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { PostProvider } from "./PostContext";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);
