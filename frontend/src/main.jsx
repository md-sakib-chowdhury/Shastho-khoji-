import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// ✅ AuthProvider এখানে নেই — App.jsx এ আছে

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);