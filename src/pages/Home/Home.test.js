import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Home from '.';

const mockBooks = { books: null };

jest.mock('../../context/useBooks', () => ({
  useBooks: () => {
    return mockBooks;
  }
}));

describe('Home', () => {
  it('sould render correctly', async () => {
    mockBooks.books = [{ title: 'Hello world book', author: 'John Doe' }];

    await waitFor(async () => {
      render(<Home />);
    });
  });
});
