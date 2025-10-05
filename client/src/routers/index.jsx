import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import AddBooks from "../pages/AddBooks.jsx";
import Update from "../pages/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comics",
        element: <Comics />,
      },
      {
        path: "/add-book",
        element: <AddBooks />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;