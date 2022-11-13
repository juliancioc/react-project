import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { useBooks } from '../../../context/useBooks';
import * as S from './styles';

export const Table = ({ data }) => {
  const { deleteBook } = useBooks();
  const [titles, setTitles] = useState(null);

  useEffect(() => {
    if (data.length) {
      const result = Object.keys(data[0]);
      setTitles(result);
    }
  }, [data]);

  const handleDelete = (id) => {
    deleteBook(id);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          {titles ? (
            <>
              {titles.map((t, idx) => (
                <th key={idx}>{t.charAt(0).toUpperCase() + t.slice(1)}</th>
              ))}
              <th>Action</th>
            </>
          ) : (
            <th>No data</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.author}</td>
              <td>
                <a href={t.link} target="_blank" rel="noopener noreferrer">
                  {t.link}
                </a>
              </td>
              <td>
                <Button>Edit</Button>
                <Button onClick={() => handleDelete(t.id)}>Delete</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};
