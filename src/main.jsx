import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Custom404 from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/aboutme",
    element: <About />,
  },
  {
    path: "*",
    element: <Custom404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
