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
    <>
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
              <div className="space-x-2">
                <button
                  type="submit"
                  className="bg-linear-to-r rounded-[2px] shadow-lg shadow-red-500/50 from-red-500 to-pink-500 w-[100px] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-linear-to-r rounded-[2px] shadow-lg shadow-blue-500/50 from-blue-500 to-blue-800 w-[100px] cursor-pointer"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;