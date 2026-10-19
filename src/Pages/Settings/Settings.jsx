import React from "react";
import "./Settings.css";
import logo from "../../assets/logo.png";
import { faSearch, faHome, faBook, faPencil, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Settings = () => {
  return (

    <div className="id">
      <div className="wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <figure></figure>
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input className="search__input" placeholder="Search for books" type="text"></input>
                  <div className="search__icon">
                    <FontAwesomeIcon icon={faSearch} />
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
                  <FontAwesomeIcon icon={faPencil} />
                </div>
                <div className="sidebar__link--text">Highlights</div>
                <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <div className="sidebar__link--text">Search</div>
                </div>
              </div>
            </div>
            <div className="sidebar__bottom"></div>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Settings;