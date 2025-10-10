import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routers/Router";
import { RouterProvider } from "react-router";
import NavBar from "./components/Navbar";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={Router} />
  </StrictMode>
);