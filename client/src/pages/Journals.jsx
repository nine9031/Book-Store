import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import JournalsShow from "../components/JournalsShow";
import JournalService from "../services/journal.service";
import { FiPlus } from "react-icons/fi"; // ต้องติดตั้ง react-icons ก่อน

const Journals = () => {
  const [journal, setJournal] = useState([]);

  useEffect(() => {
    const getAllJournal = async () => {
      try {
        const response = await JournalService.getAllJournal();

        if (response.status === 200) {
          setJournal(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Journal",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllJournal();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-6">
        <a
          href="/AddJournal"
          className="btn btn-primary flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl"
        >
          <FiPlus />
        </a>
      </div>

      <JournalsShow journal={journal} />
    </div>
  );
};

export default Journals;
