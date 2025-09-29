import { useState, useEffect } from "react";
import Book from "../components/BookCard";
import BookService from "../services/book.service";
import Swal from "sweetalert2";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookService.getAllBook();

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
    <div>
      <div>Books</div>
      {books.length > 0 &&
        books.map((book) => <Book key={book.title} book={book} />)}
    </div>
  );
};

export default Books;
