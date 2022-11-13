import { api } from '../../../services/api';

export const getBooks = async () => {
  const { data } = await api.get('books');

  return data;
};
