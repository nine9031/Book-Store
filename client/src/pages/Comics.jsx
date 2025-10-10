import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ComicsShow from "../components/ComicsShow";
import ComicService from "../services/comic.service";
import { FiPlus } from "react-icons/fi"; // อย่าลืมติดตั้ง react-icons ด้วย

const Comics = () => {
  const [comic, setComic] = useState([]);

  useEffect(() => {
    const getAllComic = async () => {
      try {
        const response = await ComicService.getAllComic();

        if (response.status === 200) {
          setComic(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Comic",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllComic();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-6">
        <a
          href="/AddComic"
          className="btn btn-primary flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl"
        >
          <FiPlus />
        </a>
      </div>

      <ComicsShow comics={comic} />
    </div>
  );
};

export default Comics;