import React from "react";
import BookService from "../services/book.service";
import { useNavigate } from "react-router";


const BookCard = (props) => {
    const navigate = useNavigate();
  const handleDelete = async (itemId) => {
    const isSubmitted = window.confirm(
      "Please Confirm To Delete Your Book!"
    );
    if (!isSubmitted) return;

    try {
      const response = await BookService.deleteBook(itemId)
      if (response.status === 200) {
        alert("Book deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.coverImage} alt={props.itemType} />
      </figure>
           <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
          <p><strong>ชื่อผู้เขียน :</strong> {props.author} </p>
          <p> <strong>หมวดหมู่ :</strong> {props.category} </p>
          <p><strong>ปีที่เขียน :</strong> {props.publishYear} </p>
          <p><strong>ภาษา :</strong> {props.language}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(props.itemId)}
              className="btn btn-soft btn-error"
            >
              ลบ
            </button>
            <a
              href={"/updateBook/" + props.itemId}
              className="btn btn-soft btn-warning"
            >
              แก้ไข
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default BookCard;