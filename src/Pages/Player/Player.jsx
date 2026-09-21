import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Player.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHome, faBook, faPen, faSearch, faGear, faQuestionCircle, faSignIn, faFont, faPlay, faRotateLeft, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Player = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  const togglePlayPause = () => {
       if (isPlaying) {
        audioRef.current.pause();
       } else {
        audioRef.current.play();
       }
       setIsPlaying (!isPlaying);

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

            <div className="sidebar__link--wrapper sidebar__font--size-wrapper">
              <div className="sidebar__link--text sidebar__font--size-icon sidebar__font--size-icon--active">
                <FontAwesomeIcon icon={faFont} size="sm" />
              </div>
              <div className="sidebar__link--text sidebar__font--size-icon">
                <FontAwesomeIcon icon={faFont} />
              </div>
              <div className="sidebar__link--text sidebar__font--size-icon">
                <FontAwesomeIcon icon={faFont} size="lg" />
              </div>
              <div className="sidebar__link--text sidebar__font--size-icon">
                <FontAwesomeIcon icon={faFont} size="xl" />
              </div>
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
       <div className="summary">
        <div className="audio__book--summary">
          <div className="audio__book--summary-title"><b>{book.title}</b></div>
          <div className="audio__book--summary-text">{book.summary}</div>
        </div>
        <div className="audio__wrapper">
          <audio ref={audioRef} src={book.audioLink}></audio>
          <div className="audio__track--wrapper">
            <figure className="audio__track--image-mask">
              <figure className="book__image--wrapper"><img className="book__image" src={book.imageLink} alt={book.title}></img></figure>
            </figure>
            <div className="audio__track--details-wrapper">
              <div className="audio__track--title">{book.title}</div>
              <div className="audio__track--author">{book.author}</div>
            </div>
          </div>
          <div className="audio__controls--wrapper">
            <div className="audio__controls">
              <button className="audio__controls--btn"><FontAwesomeIcon icon={faRotateLeft} />10</button>
              <button onClick={togglePlayPause} className="audio__controls--btn audio__controls--btn-play"><FontAwesomeIcon icon={faPlay} />{isPlaying ? 'Pause' : 'Play'}</button>
              <button className="audio__controls--btn"><FontAwesomeIcon icon={faRotateRight} />10</button>
            </div>
          </div>
          <div className="audio__progress--wrapper">
            <div className="audio__time">0:00</div>
            <input type="range" className="audio__progress--bar"/>
            <div className="audio__time">{}</div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Player;