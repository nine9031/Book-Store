import { createBrowserRouter } from "react-router";
import AddBook from "../pages/AddBook.jsx";
import AddComic from "../pages/AddComic.jsx";
import AddJournal from "../pages/AddJournal.jsx";
import UpdateBook from "../pages/UpdateBook.jsx";
import UpdateJournal from "../pages/UpdateJournal.jsx";
import UpdateComic from "../pages/UpdateComic.jsx";
import Books from "../pages/Books.jsx";
import Journal from "../pages/Journals.jsx";
import Comic from "../pages/Comics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },

  {
    path: "/comics",
    element: <Comic />,
  },
  {
    path: "/journals",
    element: <Journal />,
  },

  {
    path: "/updateComic/:id",
    element: <UpdateComic />,
  },
    {
    path: "/updateJournal/:id",
    element: <UpdateJournal />,
  },
    {
    path: "/updateBook/:id",
    element: <UpdateBook />,
  },
    {
    path: "/addBook",
    element: <AddBook/>,
  },
   {
    path: "/addComic",
    element: <AddComic/>,
  }, {
    path: "/addJournal",
    element: <AddJournal/>,
  },
]);
export default router;