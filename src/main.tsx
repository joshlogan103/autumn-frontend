import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

// Use a non-null assertion to inform TypeScript that rootElement will always exist
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Theme accentColor="cyan" appearance="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
