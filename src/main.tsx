import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:svg-icons-register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import MainLayout from "./components/layouts/Main.tsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/auth/login",
        id: "login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        id: "sign up",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
