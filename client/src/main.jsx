import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login, Register } from "./pages/index.jsx";
const router = createBrowserRouter([{ path: "/", element: <Home /> },
  {path:'/login',
    element:<Login />
  },
  {path:'/register',
    element:<Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
