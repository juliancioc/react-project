import React, { useState, useEffect, useContext, createContext } from 'react';
import { getBooks } from '../pages/Home/services/books-service';

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    listBooks();
  }, []);

  const listBooks = async () => {
    const data = await getBooks();

    setBooks(data);
  };

  const contextValues = {
    books
  };

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext)
