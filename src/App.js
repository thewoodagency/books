import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const APIENDPOINT = 'http://localhost:3001/books'
function App() {
  const [books, setBooks] = useState([]);

  const fetchedBooks = async () => {
    const response = await axios.get(APIENDPOINT);
    console.log(response)
    setBooks(response.data);
  };

  useEffect(() => {
    fetchedBooks()
  }, [])

  const addBook = async (title) => {
    const response = await axios.post(APIENDPOINT, {
      title,
    });

    console.log(response);
    setBooks([
      ...books,
      response.data
    ]);
  };

  const deleteBook = async (id) => {    
    const response = await axios.delete(APIENDPOINT + '/' + id)
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookTitle = async (id, title) => {
    const response = await axios.put(APIENDPOINT + '/' + id, {
      title
    })
   
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data
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
