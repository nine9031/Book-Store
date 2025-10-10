import api from "./api.js";
const ITEM_API = import.meta.env.VITE_ITEMS_API;

//GetAll
const getAllItem = async () => {
  return await api.get(ITEM_API);
};
//GetByID
const getItemByID = async (id) => {
  return await api.get(`${ITEM_API}/${id}`);
};
//UpdatebyID
const updateItemByID = async (id, book) => {
  return await api.put(`${ITEM_API}/${id}`, book);
};
//CreateItems
const createItem = async (book) => {
  return await api.post(`${ITEM_API}`, book);
};
//DeleteItems
const deleteItem = async (id) => {
  return await api.delete(`${ITEM_API}/${id}`);
};

const ItemService = {
  getAllItem,
  getItemByID,
  updateItemByID,
  createItem,
  deleteItem,
};

export default ItemService;