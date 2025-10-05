import { useState, useEffect } from "react";
import Book from "../components/BookCard";
import BookService from "../services/book.service";
import Swal from "sweetalert2";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookService.getAllBooks();

        if (response.status === 200) {
          setBooks(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Books",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow-lg">📚 All Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.length > 0 ? (
            books.map((book) => <Book key={book.title} book={book} />)
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">No books found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
