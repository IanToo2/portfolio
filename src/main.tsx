import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/base.css";
import "./styles/ui.css";
import "./styles/home.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found: #root");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
