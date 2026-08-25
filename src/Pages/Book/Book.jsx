const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.imageLink} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
};

export default Book;