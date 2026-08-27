import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <div className="book">
      {book.subscriptionRequired && (
        <div className="book__premium">Premium</div>
      )}
      <img src={book.imageLink} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p className="book__subtitle">{book.subTitle}</p>

      <div className="book__details">
        <div className="book__duration">
          <FontAwesomeIcon icon={faClock} />
          <span>3.24</span>
        </div>
      </div>

      <div className="book__rating">
        <FontAwesomeIcon icon={faStar} />
        <span>{book.averageRating}</span>
      </div>
    </div>
  );
};

export default Book;
