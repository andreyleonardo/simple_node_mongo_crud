import getBooks from '../../../app/controllers/books-controller';

describe('Books Controller', () => {
  const mockReply = jest.fn((param) => param);

  it('get books returns a books object', () => {
    const expected = {
      books: []
    };

    expect(getBooks(null, mockReply)).toEqual(expected);
  });
});
