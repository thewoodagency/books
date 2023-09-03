import BookShow from './BookShow';

function BookList({ books, deleteBook, editBookTitle }) {
  console.log('books', books);

  //const bookStyle = {margin: '10px', border: '1px solid black', padding: '30px'}

  const renderBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <BookShow
          book={book}
          deleteBook={deleteBook}
          editBookTitle={editBookTitle}
        />
      </div>
    );
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
