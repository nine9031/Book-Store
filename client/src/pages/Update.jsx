import { useParams } from "react-router";
import { useNavigate } from "react-router";
import BooksService from "../services/book.service";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Update = () => {
  const { id } = useParams();

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

  useEffect(() => {
    const updateRestaurant = async (id) => {
      try {
        const resp = await BooksService.getBookById(id);
        if (resp.status === 200) {
          setBookData(resp.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All restaurants",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    updateRestaurant(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const resp = await BooksService.updateBook(id, bookData);
      if (resp.status === 200) {
        alert("Restaurant Updated successfully!");
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
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6 py-12">
      <div className="w-full max-w-lg space-y-8 rounded-2xl bg-white/90 p-10 shadow-2xl border border-indigo-200">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">
            ✏️ Update Book
          </h2>
          <p className="text-gray-500 mt-2">Edit the details below to update the book information.</p>
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
              <label htmlFor="publisher" className="block text-sm font-semibold text-indigo-700">Publisher</label>
              <input id="publisher" name="publisher" type="text" required onChange={handleChange} value={bookData.publisher} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-indigo-700">Description</label>
              <input id="description" name="description" type="text" required onChange={handleChange} value={bookData.description} className="mt-1 block w-full rounded-lg border border-indigo-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 sm:text-sm transition" />
            </div>
          </div>
          <div className="pt-4 flex gap-4 justify-end">
            <button type="button" onClick={() => navigate("/")} className="rounded-lg bg-gradient-to-r from-red-400 to-pink-500 px-6 py-2 text-base font-bold text-white shadow hover:from-pink-500 hover:to-red-400 focus:ring-4 focus:ring-pink-200 transition-all duration-200">
              Cancel
            </button>
            <button type="button" onClick={handleSubmit} className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 text-base font-bold text-white shadow hover:from-pink-500 hover:to-indigo-500 focus:ring-4 focus:ring-pink-200 transition-all duration-200">
              <span className="mr-2">💾</span> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;