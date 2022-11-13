
import { api } from '../../../services/api';

export const addBook = async (book) => {
  const { data } = await api.post('books', book);

  return data;
};
