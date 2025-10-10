import api from "./api.js";
const JOURNAL_API = import.meta.env.VITE_JOURNALS_API;

//GetAllJournal
const getAllJournals = async () => {
  return await api.get(JOURNAL_API);
};

//GetByID
const getJournalByID = async (id) => {
  return await api.get(`${JOURNAL_API}/${id}`);
};
//UpdateByID
const updateJournalByID = async (id, journal) => {
  return await api.put(`${JOURNAL_API}/${id}`, journal);
};

//CreateJournals
const createJournal = async (journal) => {
  return await api.post(`${JOURNAL_API}`, journal);
};
//DelteJournals
const deleteJournal = async (id) => {
  return await api.delete(`${JOURNAL_API}/${id}`);
};

const JournalService = {
  getAllJournals,
  getJournalByID,
  updateJournalByID,
  createJournal,
  deleteJournal,
};

export default JournalService;
