import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Hero from "./Component/Hero/Hero";
import Book from "./Component/Book/Book";
import ListedBooks from "./Pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: `/book/:id`,
        element: <Book></Book>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
