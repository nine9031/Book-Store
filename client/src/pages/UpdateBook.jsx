import React, { useState, useEffect } from "react";
import BookService from "../services/book.service.js";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
    location: "A1-B2-C3",
  });

  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const resp = await BookService.getBookByID(id);
        if (resp.status === 200) setBook(resp.data.data);
      } catch (error) {
        Swal.fire({
          title: "Error fetching book",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchBook(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBook = await BookService.editBookById(id, book);
      if (updatedBook.status === 200 || updatedBook.status === 201) {
        await Swal.fire({
          title: "Success!",
          text: "Book updated successfully!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      await Swal.fire({
        title: "Update Failed",
        text: error.message || "Request failed",
        icon: "error",
      });
      console.error("Update book error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Update Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Author</span>
              </label>
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                placeholder="Enter author"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Category</span>
              </label>
              <input
                type="text"
                name="category"
                value={book.category}
                onChange={handleChange}
                placeholder="Enter category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Publish Year</span>
              </label>
              <input
                type="number"
                name="publishYear"
                value={book.publishYear}
                onChange={handleChange}
                min="0"
                placeholder="Enter publish year"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-700">ISBN</span>
              </label>
              <input
                type="text"
                name="isbn"
                value={book.isbn}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Publisher</span>
              </label>
              <input
                type="text"
                name="publisher"
                value={book.publisher}
                onChange={handleChange}
                placeholder="Enter publisher"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Edition</span>
              </label>
              <input
                type="text"
                name="edition"
                value={book.edition}
                onChange={handleChange}
                placeholder="Enter edition"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Page Count</span>
              </label>
              <input
                type="number"
                name="pageCount"
                value={book.pageCount}
                onChange={handleChange}
                min="0"
                placeholder="Enter page count"
                className="input input-bordered w-full"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Language</span>
              </label>
              <input
                type="text"
                name="language"
                value={book.language}
                onChange={handleChange}
                placeholder="Enter language"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-700">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                value={book.genre}
                onChange={handleChange}
                placeholder="Enter genre"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700">Description</span>
            </label>
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
            />
          </div>


          <div>
            <label className="label">
              <span className="label-text text-gray-700">Cover Image URL</span>
            </label>
            <input
              type="text"
              name="coverImage"
              value={book.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
            />
            {book.coverImage && (
              <div className="mt-3 flex justify-center">
                <img
                  src={book.coverImage}
                  alt="Cover preview"
                  className="h-40 rounded-lg shadow-md"
                />
              </div>
            )}
          </div>


          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="btn btn-success px-8 hover:scale-105 transition-transform"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
