import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="section__title">Understand books in a few minutes</div>
            <div className="features__wrapper">
              <div className="features">
                <div className="features__icon">
                  <FontAwesomeIcon icon={faFile} />
                </div>
                <div className="features__title">Read or Listen</div>
                <div className="features__sub--title">
                  Save time by getting core ideas from the best books
                </div>
              </div>
              <div className="features"></div>
              <div className="features"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;