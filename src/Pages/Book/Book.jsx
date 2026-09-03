import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <a href={`/book/${book.id}`} className="book">
      {book.subscriptionRequired && (
        <div className="book__premium">Premium</div>
      )}

      <div className="book__cover-wrap">
        <img className="book__cover" src={book.imageLink} alt={book.title} />
      </div>

      <div className="book__content">
        <h2>{book.title}</h2>
        <p className="book__author">{book.author}</p>
        <p className="book__subtitle">{book.subTitle}</p>

        <div className="book__meta">
          <div className="book__duration">
            <span className="book__meta-icon">
              <FontAwesomeIcon icon={faClock} />
            </span>
            <span>{book.audioLength || "03:24"}</span>
          </div>

          <div className="book__rating">
            <span className="book__meta-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>{book.averageRating}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Book;
