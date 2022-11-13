import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBooks } from '../../context/useBooks';

const Home = () => {
  const { books } = useBooks();
  const history = useNavigate();

  const handleNewBook = () => {
    history('new-book');
  };

  return (
    <Fragment>
      <h1>Books</h1>
      <button onClick={handleNewBook}>New book</button>
      {books.map((book, idx) => (
        <p key={idx}>{book.title}</p>
      ))}
    </Fragment>
  );
};

export default Home;
