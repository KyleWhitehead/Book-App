import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHome,
  faBook,
  faPen,
  faSearch,
  faGear,
  faQuestionCircle,
  faSignIn,
  faStar,
  faClock,
  faMicrophone,
  faLightbulb,
  faBookOpen,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";
import "./BookPage.css";

const BookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );

        const data = await response.json();

        setBook(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div id="__next">
        {/* MAIN WRAPPER */}
        <div className="wrapper">
          {/* SEARCH BAR */}
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input
                    className="search__input"
                    placeholder="Search books..."
                    type="text"
                  />

                  <div className="search__icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
              </div>

              <div className="sidebar__toggle--btn"></div>
            </div>
          </div>

          {/* BOOK CONTENT */}
          <div className="row">
            <audio></audio>

            <div className="container">
              <div className="inner__wrapper">
                {/* BOOK INFORMATION */}
                <div className="inner__book">
                  <div className="inner-book__title">{book.title}</div>

                  <div className="inner-book__author">{book.author}</div>

                  <div className="inner-book__sub--title">{book.subTitle}</div>

                  {/* BOOK STATS */}
                  <div className="inner-book__wrapper">
                    <div className="inner-book__description--wrapper">
                      <div className="inner-book__description">
                        <div className="inner-book__icon">
                          <FontAwesomeIcon icon={faStar} />
                        </div>

                        <div className="inner-book__overall--rating">
                          {book.averageRating}
                        </div>

                        <div className="inner-book__total--rating">
                          ({book.totalRating + " ratings"})
                        </div>
                      </div>

                      <div className="inner-book__description">
                        <div className="inner-book__icon">
                          <FontAwesomeIcon icon={faClock} />
                        </div>

                        <div className="inner-book__duration">
                          {book.duration}
                        </div>
                      </div>

                      <div className="inner-book__description">
                        <div className="inner-book__icon">
                          <FontAwesomeIcon icon={faMicrophone} />
                        </div>

                        <div className="inner-book__type">{book.type}</div>
                      </div>

                      <div className="inner-book__description">
                        <div className="inner-book__icon">
                          <FontAwesomeIcon icon={faLightbulb} />
                        </div>

                        <div className="inner-book__key-ideas">
                          {book.keyIdeas + " Key ideas"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* READ / LISTEN BUTTONS */}
                  <div className="inner-book__read--btn-wrapper">
                    <button
                      type="button"
                      className="inner-book__read--btn"
                      onClick={() => navigate(`/player/${id}`)}
                    >
                      <div className="inner-book__read--icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </div>

                      <div className="inner-book__read--text">Read</div>
                    </button>

                    <button
                      type="button"
                      className="inner-book__read--btn"
                      onClick={() => navigate(`/player/${id}`)}
                    >
                      <div className="inner-book__read--icon">
                        <FontAwesomeIcon icon={faMicrophone} />
                      </div>

                      <div className="inner-book__read--text">Listen</div>
                    </button>
                  </div>

                  {/* LIBRARY BUTTON */}
                  <div className="inner-book__bookmark">
                    <div className="inner-book__bookmark--icon">
                      <FontAwesomeIcon icon={faBookBookmark} />
                    </div>

                    <div className="inner-book__bookmark--text">
                      Add title to My Library
                    </div>
                  </div>

                  {/* ABOUT THE BOOK */}
                  <div className="inner-book__secondary--title">
                    What's it about?
                  </div>

                  <div className="inner-book__tags--wrapper">
                    {book.tags.map((tag, index) => (
                      <div key={index} className="inner-book__tag">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="inner-book__book--description">
                    {book.bookDescription}
                  </div>

                  {/* ABOUT THE AUTHOR */}
                  <h2 className="inner-book__secondary--title">
                    About the Author
                  </h2>

                  <div className="inner-book__author--description">
                    {book.authorDescription}
                  </div>
                </div>

                {/* BOOK IMAGE */}
                <div className="inner-book__img-wrapper">
                  <img
                    className="inner-book__img"
                    src={book.imageLink}
                    alt={book.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIDEBAR OVERLAY */}
      <div className="sidebar__overlay sidebar__overlay--hidden"></div>

      {/* SIDEBAR */}
      <div className="sidebar sidebar--closed">
        <div className="sidebar__logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="sidebar__wrapper">
          <div className="sidebar__top">
            <a className="sidebar__link--wrapper" href="/for-you">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faHome} />
              </div>

              <div className="sidebar__link--text">For You</div>
            </a>

            <a className="sidebar__link--wrapper" href="/library">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faBook} />
              </div>

              <div className="sidebar__link--text">Library</div>
            </a>

            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faPen} />
              </div>

              <div className="sidebar__link--text">Highlights</div>
            </div>

            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faSearch} />
              </div>

              <div className="sidebar__link--text">Search</div>
            </div>
          </div>

          <div className="sidebar__bottom">
            <a className="sidebar__link--wrapper" href="/settings">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faGear} />
              </div>

              <div className="sidebar__link--text">Settings</div>
            </a>

            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>

              <div className="sidebar__link--text">Help & Support</div>
            </div>

            <div className="sidebar__link--wrapper">
              <div className="sidebar__link--line"></div>

              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon={faSignIn} />
              </div>

              <div className="sidebar__link--text">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
