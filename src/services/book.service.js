import api from "./api";

const API_URL = import.meta.env.VITE_BOOK_API;

const createBook = async (data) => {
  return await api.post(`${API_URL}/`, data);
};

const getAllBook = async () => {
  return await api.get(`${API_URL}/`);
};

const deleteBook = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

const BookService = {
  createBook,
  getAllBook,
  deleteBook,
};

export default BookService;
