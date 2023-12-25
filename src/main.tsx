import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:svg-icons-register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import FullLayout from "./layouts/FullLayout.tsx";
import Dashboard from "./layouts/Dashboard.tsx";
import Invitation from "./components/Invitation/Invitation.tsx";
import InvitationAcception from "./components/Invitation/InvitationAcception.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <FullLayout />,
    children: [
      {
        path: "login",
        id: "login",
        element: <Login />,
      },
      {
        path: "signup",
        id: "sign up",
        element: <Login />,
      },
    ],
  },
  {
    path: "/invitation",
    element: <FullLayout />,
    children: [
      {
        index: true,
        element: (
          <Invitation event="Alans Christmas" date="December 23, 2023" />
        ),
      },
      {
        path: "/invitation/accepted",
        element: <InvitationAcception />,
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
