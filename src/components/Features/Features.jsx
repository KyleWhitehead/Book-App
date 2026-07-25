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
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">of summarist members <b>establish better</b> habits</div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">have made <b>significant positive</b> change to their lives</div>
              </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__data">
                  <div className="statistics__data--number">91%</div>
                  <div className="statistics__data--title">of summarist members <b>report feeling more productive</b> after incorporating summaries into their routine </div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">94%</div>
                  <div className="statistics__data--title">of summarist members have <b> noticed an improvement </b> in their overall comprehension and retention of information</div>
                </div>
                <div className="statistics__data">
                  <div className="statistics__data--number">88%</div>
                  <div className="statistics__data--title">of summarist members <b>feel more informed</b> about current events and industry trends since using the platform</div>
                </div>
              </div>
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__heading">Expand your learning</div>
                <div className="statistics__heading">Accomplish your goals</div>
                <div className="statistics__heading">Strengthen your vitality</div>
                <div className="statistics__heading">Become a better caregiver</div>
                <div className="statistics__heading">Improve your mood</div>
                <div className="statistics__heading">Maximize your abilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;