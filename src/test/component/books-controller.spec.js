import BooksController from '../../app/controllers/books-controller';
import request from 'supertest';
import { rewireVariable } from '../rewire';
import { serverListener } from '../../app/config/server-config';

describe('Toggles Controller Component Test', () => {
  it('returns all toggles', () => {
    const expected = { books: [
      {
        genre: 'Action',
        title: 'BookTest'
      }
    ] };

    const responseStatus = 200;

    rewireVariable(BooksController, 'responseBody', expected);

    return request(serverListener)
      .get('/simple-crud/books')
      .expect(responseStatus, expected);
  });

  it('returns empty hash when there are no toggles', () => {
    const expected = { books: [] };

    rewireVariable(BooksController, 'responseBody', expected);
    const responseStatus = 200;

    return request(serverListener)
      .get('/simple-crud/books')
      .expect(responseStatus, expected);
  });
});
