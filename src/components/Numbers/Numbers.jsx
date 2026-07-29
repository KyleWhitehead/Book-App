import React from "react";
import "./Numbers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faStar,
  faStarHalfAlt,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const Numbers = () => {
  return (
    <section>
        <div className="container">
          <div className="row">
            <div className="section-title">Start growing with Summarist now</div>
            <div className="numbers__wrapper">
              <div className="numbers">
                <div className="numbers__icon">
                  <FontAwesomeIcon icon={faCrown} />
                </div>
                <div className="numbers__title">3 million</div>
                <div className="numbers__sub-title">Downloads on all platforms</div>
              </div>
              <div className="numbers">
                <div className="numbers__icon numbers__star--icon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <div className="numbers__title">4.5 Stars</div>
                <div className="numbers__sub-title">Average ratings on iOS and Google Play</div>
              </div>
              <div className="numbers">
                <div className="numbers__icon">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className="numbers__title">97%</div>
                <div className="numbers__sub-title">Of Summarist members create a better reading habit</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Numbers;