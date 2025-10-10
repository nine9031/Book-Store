import React, { useState, useEffect } from "react";
import ComicService from "../services/comic.service.js";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const UpdateComic = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [comic, setComic] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "",
    series: "",
    volumeNumber: "",
    illustrator: "",
    colorType: "",
    targetAge: "",
    description: "",
    coverImage: "",
  });

  useEffect(() => {
    const fetchComic = async (id) => {
      try {
        const resp = await ComicService.getComicByID(id);
        if (resp.status === 200) setComic(resp.data.data);
      } catch (error) {
        Swal.fire({
          title: "Error fetching comic",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchComic(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComic((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedComic = await ComicService.editComicById(id, comic);
      if (updatedComic.status === 200 || updatedComic.status === 201) {
        await Swal.fire({
          title: "Success!",
          text: "Comic updated successfully!",
          icon: "success",
        });
        navigate("/comics");
      }
    } catch (error) {
      await Swal.fire({
        title: "Update Failed",
        text: error.message || "Request failed",
        icon: "error",
      });
      console.error("Update comic error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Update Comic
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
                value={comic.title}
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
                value={comic.author}
                onChange={handleChange}
                placeholder="Enter author"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Category</span>
              </label>
              <input
                type="text"
                name="category"
                value={comic.category}
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
                value={comic.publishYear}
                onChange={handleChange}
                min="0"
                placeholder="Enter publish year"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">ISBN</span>
              </label>
              <input
                type="text"
                name="isbn"
                value={comic.isbn}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Series</span>
              </label>
              <input
                type="text"
                name="series"
                value={comic.series}
                onChange={handleChange}
                placeholder="Enter series"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Volume Number</span>
              </label>
              <input
                type="number"
                name="volumeNumber"
                value={comic.volumeNumber}
                onChange={handleChange}
                placeholder="Enter volume number"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Illustrator</span>
              </label>
              <input
                type="text"
                name="illustrator"
                value={comic.illustrator}
                onChange={handleChange}
                placeholder="Enter illustrator"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Color Type</span>
              </label>
              <input
                type="text"
                name="colorType"
                value={comic.colorType}
                onChange={handleChange}
                placeholder="Enter color type"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Target Age</span>
              </label>
              <input
                type="text"
                name="targetAge"
                value={comic.targetAge}
                onChange={handleChange}
                placeholder="Enter target age"
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
              value={comic.description}
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
              value={comic.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
            />
            {comic.coverImage && (
              <div className="mt-3 flex justify-center">
                <img
                  src={comic.coverImage}
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
              Update Comic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateComic;