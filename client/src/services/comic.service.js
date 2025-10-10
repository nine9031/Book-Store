import api from "./api.js";
const COMIC_API = import.meta.env.VITE_COMICS_API;

//GetAllComic
const getAllComic = async () => {
  return await api.get(COMIC_API);
};
//GetByID
const getComicByID = async (id) => {
  return await api.get(`${COMIC_API}/${id}`);
};
//UpdateByID
const updateComicByID = async (id, comic) => {
  return await api.put(`${COMIC_API}/${id}`, comic);
};
//AddComics
const createComic = async (comic) => {
  return await api.post(`${COMIC_API}`, comic);
};
//DeleteComics
const deleteComic = async (id) => {
  return await api.delete(`${COMIC_API}/${id}`);
};

const ComicService = {
  getAllComic,
  getComicByID,
  updateComicByID,
  createComic,
  deleteComic,
};

export default ComicService;
