import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// import HeaderLayout from "./pages/HeaderLayout";
// import Mobile from "./pages/Mobile";
import Planet from "./pages/Planet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/:name",
        element: <Planet />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
