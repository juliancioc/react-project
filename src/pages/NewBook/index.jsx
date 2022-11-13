import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '../../components/common/Form';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useBooks } from '../../context/useBooks';

const NewBook = () => {
  const history = useNavigate();
  const { createNewBook, listBooks } = useBooks();
  const [book, setBook] = useState(null);

  const handleCreateBook = (e) => {
    e.preventDefault();
    createNewBook({ ...book, id: Math.floor(Math.random() * 100) });
    history('/');
    listBooks()
  };

  return (
    <Fragment>
      <h1>Add new book</h1>
      <Form onSubmit={handleCreateBook}>
        <label htmlFor="title">Title: </label>
        <Input
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          id="title"
          name="title"
        />
        <label htmlFor="author">Author: </label>
        <Input
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          id="author"
          name="author"
        />
        <label htmlFor="link">Link: </label>
        <Input
          onChange={(e) => setBook({ ...book, link: e.target.value })}
          id="link"
          name="link"
        />

        <Button type="submit">Add</Button>
      </Form>
    </Fragment>
  );
};

export default NewBook;
