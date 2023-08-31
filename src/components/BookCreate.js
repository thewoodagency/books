import { useState } from 'react';

function BookCreate({ addBook }) {
  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(bookTitle);
    setBookTitle('');
  };

  const handleTitle = (e) => {
    setBookTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h1>Add a book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={bookTitle}
          onChange={handleTitle}
          autoFocus
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
