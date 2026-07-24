import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHeadphones, faLightbulb } from "@fortawesome/free-solid-svg-icons";

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
              <div className="features">
                <div className="features__icon">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <div className="features__title">Find your next read</div>
                <div className="features__sub--title">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="features">
                <div className="features__icon">
                  <FontAwesomeIcon icon={faHeadphones} />
                </div>
                <div className="features__title">Briefcasts</div>
                <div className="features__sub--title">
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--header">
                <div className="statistics__heading">Enhance your knowledge</div>
                <div className="statistics__heading">Expand your perspective</div>
                <div className="statistics__heading">Improve your skills</div>
                <div className="statistics__heading">Stay informed</div>
                <div className="statistics__heading">Make better decisions</div>
                <div className="statistics__heading">Boost your confidence</div>
              </div>
              <div className="statistics__content--details">
                <div className="statistics__data">
                  <div className="statistics__data--number">93%</div>
                  <div className="statistics__data--title">of summarist members <b>significantly increase</b> reading frequency</div>
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">of summarist members <b>establish better</b> habits</div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">have made <b>significant positive</b> change to their lives</div>
              </div>
            </div>
            <div className="statistics__wrapper"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;