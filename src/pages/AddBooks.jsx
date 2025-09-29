import { useState } from "react";
import { useNavigate } from "react-router";
import BookService from "../services/book.service";
import Swal from "sweetalert2";
const AddBooks = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "",
    publisher: "",
    edition: "",
    pageCount: "",
    language: "",
    genre: "",
    description: "",
    coverImage: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const newBook = await BookService.createBook(book);
      console.log(newBook);
      if (newBook.status === 200) {
        Swal.fire({
          title: "Add new Book",
          text: "Add new book successfully!",
          icon: "success",
        }).then(() => {
          setBook({
            title: "",
            author: "",
            category: "",
            publishYear: "",
            isbn: "",
            publisher: "",
            edition: "",
            pageCount: "",
            language: "",
            genre: "",
            description: "",
            coverImage: "",
            location: "",
          });
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Add new book",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl bg-white/90 p-10 shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-indigo-100 rounded-full p-3 mb-2 shadow">
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Add New Book
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Fill in the details to add a new book to your library
          </p>
        </div>

        <form className="grid grid-cols-1 gap-5">
          {/* Title & Author */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                onChange={handleChange}
                value={book.title}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                required
                onChange={handleChange}
                value={book.author}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* Category & Genre */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                required
                onChange={handleChange}
                value={book.category}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="genre"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Genre
              </label>
              <input
                id="genre"
                name="genre"
                type="text"
                required
                onChange={handleChange}
                value={book.genre}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* Publish Year & Edition */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="publishYear"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Publish Year
              </label>
              <input
                id="publishYear"
                name="publishYear"
                type="text"
                required
                onChange={handleChange}
                value={book.publishYear}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="edition"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Edition
              </label>
              <input
                id="edition"
                name="edition"
                type="text"
                required
                onChange={handleChange}
                value={book.edition}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* ISBN & Publisher */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="isbn"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                ISBN
              </label>
              <input
                id="isbn"
                name="isbn"
                type="text"
                required
                onChange={handleChange}
                value={book.isbn}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="publisher"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Publisher
              </label>
              <input
                id="publisher"
                name="publisher"
                type="text"
                required
                onChange={handleChange}
                value={book.publisher}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* Page Count & Language */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="pageCount"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Page Count
              </label>
              <input
                id="pageCount"
                name="pageCount"
                type="number"
                required
                onChange={handleChange}
                value={book.pageCount}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="language"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Language
              </label>
              <input
                id="language"
                name="language"
                type="text"
                required
                onChange={handleChange}
                value={book.language}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* Location & Cover Image */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="location"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                onChange={handleChange}
                value={book.location}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
            <div>
              <label
                htmlFor="coverImage"
                className="block text-xs font-semibold text-gray-600 mb-1"
              >
                Cover Image URL
              </label>
              <input
                id="coverImage"
                name="coverImage"
                type="text"
                required
                onChange={handleChange}
                value={book.coverImage}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-semibold text-gray-600 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              onChange={handleChange}
              value={book.description}
              rows={3}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-2 flex w-full justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2.5 text-base font-bold text-white shadow-lg hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
          >
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Book
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
