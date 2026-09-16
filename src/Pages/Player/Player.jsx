import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Player.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHome, faBook, faPen, faSearch, faGear, faQuestionCircle, faSignIn} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );
        const bookData = await response.json();
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div  className="id">
      <div className="wrapper">
       <div className="search__background">
        <div className="search__wrapper">
          <figure></figure>
          <div className="search__content">
            <div className="search">
              <div className="search__input--wrapper">
                <input className="search__input" placeholder="Search for books" type="text" />
                <div className="search__icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
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
          <img src="path/to/logo.png" alt="Logo" />
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

            <div className="sidebar__link--wrapper sidebar__font--size-wrapper">
              <div className="sidebar__link--text sidebar__font--size-icon"></div>
              <div className="sidebar__link--text sidebar__font--size-icon"></div>
              <div className="sidebar__link--text sidebar__font--size-icon"></div>
              <div className="sidebar__link--text sidebar__font--size-icon"></div>
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
       <div className="summary"></div>
      </div>
    </div>
  );
};

export default Player;