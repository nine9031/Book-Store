import { createBrowserRouter } from "react-router";
import AddBook from "../pages/AddBook";
import AddComic from "../pages/AddComic";
import AddJournal from "../pages/AddJournal";
import UpdateBook from "../pages/UpdateBook";
import UpdateJournal from "../pages/UpdateJournal";
import UpdateComic from "../pages/UpdateComic";
import Books from "../pages/Books";
import Journal from "../pages/Journals";
import Comic from "../pages/Comics";
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
