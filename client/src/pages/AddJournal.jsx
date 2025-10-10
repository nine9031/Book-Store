import React, { useState } from "react";
import JournalService from "../services/journal.service.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddJournal = () => {
  const navigate = useNavigate();

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
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJournal((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setJournal({
      title: "",
      author: "",
      category: "",
      publishYear: "",
      issn: "",
      volume: "",
      issue: "",
      publicationFrequency: "MONTHLY",
      publisher: "",
      description: ""
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      const newJournal = await JournalService.createJournal(journal);

      if (newJournal.status === 201 || newJournal.status === 200) {
        await Swal.fire({
          title: "Add new journal",
          text: "Add new journal successfully!",
          icon: "success",
        });
        resetForm();
        navigate("/journals");
      }
    } catch (error) {
      await Swal.fire({
        title: "Add new journal",
        text: error?.response?.data?.message || error.message || "Request failed",
        icon: "error",
      });
      console.error("Create journal error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base-200">
      <div className="w-full max-w-4xl">
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
              Add Journal
            </h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Title", name: "title", required: true },
                { label: "Author", name: "author" },
                { label: "Category", name: "category" },
                { label: "Publish Year", name: "publishYear", type: "number" },
                { label: "ISSN", name: "issn" },
                { label: "Volume", name: "volume" },
                { label: "Issue", name: "issue" },
                { label: "Publisher", name: "publisher" },
              ].map((field) => (
                <div className="form-control" key={field.name}>
                  <label className="label">
                    <span className="label-text">{field.label}</span>
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={journal[field.name]}
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
                  value={journal.description}
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
                  Add Journal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJournal;