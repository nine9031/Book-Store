import { useState } from "react";
import BooksService from "../services/book.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddBooks = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
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
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const newBook = await BooksService.createBook(bookData);

      if (newBook.status === 201) {
        Swal.fire({
          title: "Register",
          text: newBook.data.message,
          icon: "success",
        }).then(() => {
          setBookData({
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
        title: "Register",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Add New Book
          </h2>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              onChange={handleChange}
              value={bookData.title}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              onChange={handleChange}
              value={bookData.author}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              required
              onChange={handleChange}
              value={bookData.category}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              publishYear
            </label>
            <input
              id="publishYear"
              name="publishYear"
              type="number"
              required
              onChange={handleChange}
              value={bookData.publishYear}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              isbn
            </label>
            <input
              id="isbn"
              name="isbn"
              type="text"
              required
              onChange={handleChange}
              value={bookData.isbn}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              publisher
            </label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              required
              onChange={handleChange}
              value={bookData.publisher}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              edition
            </label>
            <input
              id="edition"
              name="edition"
              type="text"
              required
              onChange={handleChange}
              value={bookData.edition}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              pageCount
            </label>
            <input
              id="pageCount"
              name="pageCount"
              type="number"
              required
              onChange={handleChange}
              value={bookData.pageCount}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              language
            </label>
            <input
              id="language"
              name="language"
              type="text"
              required
              onChange={handleChange}
              value={bookData.language}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              required
              onChange={handleChange}
              value={bookData.genre}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              required
              onChange={handleChange}
              value={bookData.description}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              coverImage
            </label>
            <input
              id="coverImage"
              name="coverImage"
              type="text"
              required
              onChange={handleChange}
              value={bookData.coverImage}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              onChange={handleChange}
              value={bookData.location}
              className="mt-2 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;