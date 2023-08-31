import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [bookTitle, setBookTitle] = useState(book.title);

  const handleTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(book.id, bookTitle)
  };

  return (
    <div>
      <h1>Edit book title - {book.title}</h1>
      <form className="book-edit" onSubmit={handleSubmit}>
        <input className="input" value={bookTitle} onChange={handleTitle} autoFocus />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
