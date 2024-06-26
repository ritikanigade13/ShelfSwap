import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Layout, ExploreBooks } from "./pages/index.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Layout Children={Home} /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/explore-books", element: <Layout Children={ExploreBooks} /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
