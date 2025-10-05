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
    const payload = {
      ...bookData,
      publishYear: Number(bookData.publishYear),
      pageCount: Number(bookData.pageCount),
    };

    const newBook = await BooksService.createBook(payload);
    
      if (newBook.status === 201) {
  Swal.fire({
    title: "Add Book",
    text: "Book created successfully!",
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
    navigate("/books");
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6 py-12">
      <div className="w-full max-w-lg space-y-8 rounded-2xl bg-white/90 p-10 shadow-2xl border border-indigo-200">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">
            📚 Add New Book
          </h2>
          <p className="text-gray-500 mt-2">Fill in the details below to add a new book to your collection.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-indigo-700">Title</label>
              <input id="title" name="title" type="text" required onChange={handleChange} value={bookData.title} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-semibold text-indigo-700">Author</label>
              <input id="author" name="author" type="text" required onChange={handleChange} value={bookData.author} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-indigo-700">Category</label>
              <input id="category" name="category" type="text" required onChange={handleChange} value={bookData.category} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="publishYear" className="block text-sm font-semibold text-indigo-700">Publish Year</label>
              <input id="publishYear" name="publishYear" type="number" required onChange={handleChange} value={bookData.publishYear} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="isbn" className="block text-sm font-semibold text-indigo-700">ISBN</label>
              <input id="isbn" name="isbn" type="text" required onChange={handleChange} value={bookData.isbn} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="publisher" className="block text-sm font-semibold text-indigo-700">Publisher</label>
              <input id="publisher" name="publisher" type="text" required onChange={handleChange} value={bookData.publisher} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="edition" className="block text-sm font-semibold text-indigo-700">Edition</label>
              <input id="edition" name="edition" type="text" required onChange={handleChange} value={bookData.edition} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="pageCount" className="block text-sm font-semibold text-indigo-700">Page Count</label>
              <input id="pageCount" name="pageCount" type="number" required onChange={handleChange} value={bookData.pageCount} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-semibold text-indigo-700">Language</label>
              <input id="language" name="language" type="text" required onChange={handleChange} value={bookData.language} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="genre" className="block text-sm font-semibold text-indigo-700">Genre</label>
              <input id="genre" name="genre" type="text" required onChange={handleChange} value={bookData.genre} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-indigo-700">Description</label>
              <input id="description" name="description" type="text" required onChange={handleChange} value={bookData.description} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="coverImage" className="block text-sm font-semibold text-indigo-700">Cover Image URL</label>
              <input id="coverImage" name="coverImage" type="text" required onChange={handleChange} value={bookData.coverImage} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-indigo-700">Location</label>
              <input id="location" name="location" type="text" required onChange={handleChange} value={bookData.location} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
          </div>
          <div className="pt-4">
            <button type="button" onClick={handleSubmit} className="flex w-full justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:from-pink-500 hover:to-indigo-500 focus:ring-4 focus:ring-pink-200 transition-all duration-200">
              <span className="mr-2">➕</span> Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;