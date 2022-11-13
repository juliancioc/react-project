import { api } from '../../../services/api';
import { getBooks } from './books-service';

describe('Service book', () => {
  it('should return books', async () => {
    const data = { title: 'Hello world book', author: 'John Doe' };
    const mockGetBooks = jest.spyOn(api, 'get');
    mockGetBooks.mockResolvedValue({
      data
    });

    const response = await getBooks();
    expect(response).toEqual(data)
  });
});
