import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:svg-icons-register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import AuthLayout from "./components/layouts/Auth.tsx";
import Dashboard from "./components/layouts/Dashboard.tsx";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
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
  {
    path: "/",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
