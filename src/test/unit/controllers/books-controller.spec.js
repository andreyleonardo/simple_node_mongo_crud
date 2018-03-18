import getBooks from '../../../../app/controllers/books-controller';

describe('Books Controller', () => {
  it('get books returns a books object', () => {
    const expected = {
      books: []
    };

    expect(getBooks()).toMatch(expected);
  });
});
