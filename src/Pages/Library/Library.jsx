import React from "react";
import "./Library.css";
import logo from "../../assets/logo.png";

const Library = () => {
  return (
    <div className="id">
      <div className="wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <figure>
              <img src={logo} alt="Logo" />
            </figure>
            <div className="search__content"></div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Library;