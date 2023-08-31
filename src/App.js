import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const MAX = 100000;

  const addBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.floor(Math.random() * MAX),
        title,
      },
    ];
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    console.log('called deleteBook', id);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    console.log('updated', updatedBooks);
    setBooks(updatedBooks);
  };

  const editBookTitle = (id, title) => {
    console.log('editbooktitle called', id, title)
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title: title,
        };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookList
        books={books}
        deleteBook={deleteBook}
        editBookTitle={editBookTitle}
      />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
