import React, { useState, useEffect, useContext, createContext } from 'react';

import { getBooks, removeBook } from '../pages/Home/services/books-service';
import { addBook } from '../pages/NewBook/services/new-book-service';

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

  const createNewBook = async (book) => {
    await addBook(book);
  };

  const deleteBook = async (id) => {
    await removeBook(id);

    setBooks(books.filter((b) => b.id !== id));
  };

  const contextValues = {
    books,
    createNewBook,
    listBooks,
    deleteBook
  };

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
