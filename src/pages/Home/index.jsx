import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/common/Button';
import { Table } from '../../components/common/Table';
import { useBooks } from '../../context/useBooks';
import * as S from './styles';

const Home = () => {
  const { books, listBooks } = useBooks();
  const history = useNavigate();

  useEffect(() => {
    listBooks();
  }, []);

  const handleNewBook = () => {
    history('new-book');
  };

  return (
    <S.Container>
      <h1>Books</h1>
      <Button onClick={handleNewBook}>New book</Button>
      <Table data={books} />
    </S.Container>
  );
};

export default Home;
