import React, { useState } from "react";
import ComicService from "../services/comic.service.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddComic = () => {
  const navigate = useNavigate();

  const [comic, setComic] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "978-0-7851-5612-5",
    series: "",
    volumeNumber: "",
    illustrator: "",
    colorType: "",
    targetAge: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComic((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setComic({
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
      description: ""
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      const newComic = await ComicService.createComic(comic);

      if (newComic.status === 201 || newComic.status === 200) {
        await Swal.fire({
          title: "Add new comic",
          text: "Add new comic successfully!",
          icon: "success",
        });
        resetForm();
        navigate("/comics");
      }
    } catch (error) {
      await Swal.fire({
        title: "Add new comic",
        text: error?.response?.data?.message || error.message || "Request failed",
        icon: "error",
      });
      console.error("Create comic error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base-200">
      <div className="w-full max-w-4xl">
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
              Add Comic
            </h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Title", name: "title", required: true },
                { label: "Author", name: "author" },
                { label: "Category", name: "category" },
                { label: "Publish Year", name: "publishYear", type: "number" },
                { label: "ISBN", name: "isbn" },
                { label: "Series", name: "series" },
                { label: "Volume Number", name: "volumeNumber", type: "number" },
                { label: "Illustrator", name: "illustrator" },
                { label: "Color Type", name: "colorType" },
                { label: "Target Age", name: "targetAge" },
              ].map((field) => (
                <div className="form-control" key={field.name}>
                  <label className="label">
                    <span className="label-text">{field.label}</span>
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={comic[field.name]}
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
                  value={comic.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="textarea textarea-bordered w-full h-28"
                />
              </div>

              {/* Buttons */}
              <div className="md:col-span-2 flex justify-center gap-4 mt-6">
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
                  Add Comic
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComic;
