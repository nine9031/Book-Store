import React, { useState } from "react";
import BookService from "../services/book.service.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "978-0-7432-7356-5",
    publisher: "",
    edition: "",
    pageCount: "",
    language: "",
    genre: "",
    description: "",
    coverImage: "",
    location: "A1-B2-C3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
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
      location: "A1-B2-C3",
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      const newBook = await BookService.createBook(book);

      if (newBook.status === 201 || newBook.status === 200) {
        await Swal.fire({
          title: "Add new book",
          text: "Add new book successfully!",
          icon: "success",
        });
        resetForm();
        navigate("/");
      } 
      
    } catch (error) {
      await Swal.fire({
        title: "Add new book",
        text:  error.message || "Request failed",
        icon: "error",
      });
      console.error("Create book error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base-200">
      <div className="w-full max-w-5xl">
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
              Add Book
            </h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Cover Image */}
              <div className="flex flex-col items-center md:items-start md:col-span-1">
                <label className="label">
                  <span className="label-text font-semibold">Cover Image URL</span>
                </label>
                <input
                  type="text"
                  name="coverImage"
                  value={book.coverImage}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                />
                <div className="mt-4 w-full">
                  <img
                    src={
                      book.coverImage ||
                      "https://vaultproducts.ca/cdn/shop/products/4454FC90-DAF5-43EF-8ACA-A1FF04CE802D.jpg?v=1656626547"
                    }
                    alt="cover preview"
                    className="object-contain h-56 w-full rounded-lg border"
                  />
                </div>
              </div>

              {/* Right: Form Fields */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Title", name: "title", required: true },
                  { label: "Author", name: "author" },
                  { label: "Category", name: "category" },
                  { label: "Publish Year", name: "publishYear", type: "number" },
                  { label: "ISBN", name: "isbn" },
                  { label: "Publisher", name: "publisher" },
                  { label: "Edition", name: "edition" },
                  { label: "Page Count", name: "pageCount", type: "number" },
                  { label: "Language", name: "language" },
                  { label: "Genre", name: "genre" },
                ].map((field) => (
                  <div className="form-control" key={field.name}>
                    <label className="label">
                      <span className="label-text">{field.label}</span>
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={book[field.name]}
                      onChange={handleChange}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="input input-bordered w-full"
                      required={field.required || false}
                      min={field.type === "number" ? 0 : undefined}
                    />
                  </div>
                ))}

                {/* Description */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="description"
                    value={book.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    className="textarea textarea-bordered w-full h-28"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="md:col-span-3 flex justify-center gap-4 mt-6">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={resetForm}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
