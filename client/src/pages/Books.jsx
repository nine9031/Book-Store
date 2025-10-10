import React, { useState, useEffect } from "react";
import BooksShow from "../components/BooksShow";
import Swal from "sweetalert2";
import BookService from "../services/book.service";
import { FiPlus } from "react-icons/fi";

const Book = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getAllBook = async () => {
      try {
        const response = await BookService.getAllBooks();

        if (response.status === 200) {
          setBook(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Book",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllBook();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-6">
        <a
          href="/AddBook"
          className="btn btn-primary flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl"
        >
          <FiPlus />
        </a>
      </div>

      <BooksShow books={book} />
    </div>
  );
};

export default Book;
