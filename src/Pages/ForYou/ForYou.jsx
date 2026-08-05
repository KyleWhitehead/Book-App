import React from "react";
import "./ForYou.css";
import logo from "../../assets/logo.png";

const ForYou = () => {
  return (
    <div className="__next">
      <div className="wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input className="search__input" placeholder="search for books" type="text"/>
                  <div className="search__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                </div>
              </div>
              <div className="sidebar__toogle--btn"></div>
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
                  
                </div>
                <div className="sidebar__link-text">For You</div>
                </a>
              <a className="sidebar__link--wrapper" href=""></a>
              <div className="sidebar__link--wrapper"></div>
              <div className="sidebar__link--wrapper"></div>
            </div>
            <div className="sidebar__bottom"></div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default ForYou;