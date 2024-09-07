import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/600.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
