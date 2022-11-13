import { api } from '../../../services/api';

export const getBooks = async () => {
  const { data } = await api.get('books');

  return data;
};

export const removeBook = async (id) => {
  const { data } = await api.delete(`books/${id}`);

  return data;
};
