import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/Error";
import HeaderOne from "./Components/Home/HeaderOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderOne></HeaderOne>,
    errorElement: <ErrorPage></ErrorPage>,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
