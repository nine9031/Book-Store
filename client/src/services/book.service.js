import api from "./api.js";
const BOOKS_API = import.meta.env.VITE_BOOKS_API;

//GetAllBooks 
const getAllBooks = async () => {
  return await api.get(BOOKS_API);
};
//GetBookByID
const getBookByID = async (id) => {
  return await api.get(`${BOOKS_API}/${id}`);
};
//UpdateByID
const updateBookByID = async (id, book) => {
  return await api.put(`${BOOKS_API}/${id}`, book);
};
//CreateBooks
const createBook = async (book) => {
  return await api.post(`${BOOKS_API}`, book);
};
//DeleteBooks 
const deleteBook = async (id) => {
  return await api.delete(`${BOOKS_API}/${id}`);
};

const BookService = {
  getAllBooks,
  getBookByID,
  updateBookByID,
  createBook,
  deleteBook,
};

export default BookService;