import React, { useEffect, useState } from "react";
import "./ForYou.css";
import logo from "../../assets/logo.png";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "../Book/Book";
const ForYou = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
    )
      .then((response) => response.json())
      .then((data) => {
        setbooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="__next">
      <div className="wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input
                    className="search__input"
                    placeholder="search for books"
                    type="text"
                  />
                  <div className="search__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sidebar__toggle--btn"></div>
            </div>
          </div>
        </div>
        <div className="sidebar__overlay sidebar__overlay--hidden"></div>
        <div className="sidebar sidebar--closed">
          <div className="sidebar__logo">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="sidebar__wrapper">
            <div className="sidebar__top">
              <a className="sidebar__link--wrapper" href="/for-you">
                <div className="sidebar__icon--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="sidebar__link-text">For You</div>
              </a>
              <a className="sidebar__link--wrapper" href="/library">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="sidebar__link--text">My Library</div>
              </a>
              <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path>
                  </svg>
                </div>
                <div className="sidebar__link--text">Highlights</div>
              </div>
              <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
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
                <div className="sidebar__link--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-help-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 1 1 5.83 1c-.03.31-.09.63-.18.94a3.5 3.5 0 0 1-2.4 2.4c-.31.09-.63.15-.94.18"></path>
                    <line x1="12" y1="17" x2="12" y2="17"></line>
                  </svg>
                </div>
                <div className="sidebar__link--text">Help & Support</div>
              </div>
              <div className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </div>
                <div className="sidebar__link--text">Logout</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title">Selected just for you</div>
              <audio></audio>
              <a
                className="selected__book"
                href="https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
              >
                <div className="selected__book--sub-title">
                  How Constant Innovation Creates Radically Successful
                  Businesses
                </div>
                <div className="selected__book--line"></div>
                <div className="selected__book--content">
                  <figure className="book__image--wrapper">
                    <img
                      className="book__image"
                      src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
                      alt="book"
                    />
                  </figure>
                  <div className="selected__book--text">
                    <div className="selected__book--title">
                      The Lean Startup
                    </div>
                    <div className="selected__book--author">Eric Ries</div>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-clock"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="selected__book--duration">
                        3 min 23 secs
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div>
                <div className="for-you__title">Recommended for You</div>
                <div className="for-you__sub--title">
                  We think you'll like these
                </div>
                <div className="for-you__recommended--books">
                  <div className="books__grid">
                    {books.map((book) => (
                      <Book key={book.id} book={book} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="for-you__title">Suggested Books</div>
                <div className="for-you__sub--title">Browse those books</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
