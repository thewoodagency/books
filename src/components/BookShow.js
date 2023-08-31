import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, deleteBook, editBookTitle }) {
  const [toggle, setToggle] = useState(false);
  const handleDelete = (id) => {
    console.log('delete id', id);
    deleteBook(id);
  };

	const handleEditClick = () => {
		setToggle(!toggle)
	}

  const handleEdit = (id, title) => {
    editBookTitle(id, title)
    setToggle(false);
  };

  let content = <h3>{book.title}</h3>;
  if (toggle) {
    content = <BookEdit book={book} onSubmit={handleEdit} />;
  }

  return (
    <div className="book-show">
			<img src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={() => handleDelete(book.id)}>
          delete
        </button>
        <button className="edit" onClick={() => handleEditClick()}>
          edit
        </button>
      </div>
    </div>
  );
}

export default BookShow;
