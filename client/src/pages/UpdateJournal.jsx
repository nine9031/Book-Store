import React, { useState, useEffect } from "react";
import JournalService from "../services/journal.service.js";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const UpdateJournal = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [journal, setJournal] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    issn: "",
    volume: "",
    issue: "",
    publicationFrequency: "MONTHLY",
    publisher: "",
    description: "",
    coverImage: "",
  });

  useEffect(() => {
    const fetchJournal = async (id) => {
      try {
        const resp = await JournalService.getJournalByID(id);
        if (resp.status === 200) setJournal(resp.data.data);
      } catch (error) {
        Swal.fire({
          title: "Error fetching journal",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchJournal(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJournal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedJournal = await JournalService.editJournalById(id, journal);
      if (updatedJournal.status === 200 || updatedJournal.status === 201) {
        await Swal.fire({
          title: "Success!",
          text: "Journal updated successfully!",
          icon: "success",
        });
        navigate("/journals");
      }
    } catch (error) {
      await Swal.fire({
        title: "Update Failed",
        text: error.message || "Request failed",
        icon: "error",
      });
      console.error("Update journal error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Update Journal
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
                value={journal.title}
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
                value={journal.author}
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
                value={journal.category}
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
                value={journal.publishYear}
                onChange={handleChange}
                min="0"
                placeholder="Enter publish year"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">ISSN</span>
              </label>
              <input
                type="text"
                name="issn"
                value={journal.issn}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Volume</span>
              </label>
              <input
                type="text"
                name="volume"
                value={journal.volume}
                onChange={handleChange}
                placeholder="Enter volume"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-gray-700">Issue</span>
              </label>
              <input
                type="text"
                name="issue"
                value={journal.issue}
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
                value={journal.publisher}
                onChange={handleChange}
                placeholder="Enter publisher"
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
              value={journal.description}
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
              value={journal.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
            />
            {journal.coverImage && (
              <div className="mt-3 flex justify-center">
                <img
                  src={journal.coverImage}
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
              Update Journal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJournal;
