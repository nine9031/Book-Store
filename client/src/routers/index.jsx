import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import Books from "../pages/Books.jsx";
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
        path: "/Books",
        element: <Books />,
      },
      {
        path: "/add-books",
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
