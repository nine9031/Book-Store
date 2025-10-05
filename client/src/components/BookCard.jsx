import { useEffect } from "react";
import Swal from "sweetalert2";
import BookService from "../services/book.service";

const BookCard = ({ book }) => {
  useEffect(() => {}, []);

  const handleDelete = async (itemId) => {
    console.log("Deleting id:", itemId);
    try {
      const response = await BookService.deleteBook(itemId);
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted Book",
          text: "Book deleted successfully!",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-2">{book.title}</h2>
        <p className="text-gray-700 text-base mb-2">{book.author}</p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
          onClick={() => handleDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
