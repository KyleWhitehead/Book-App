import "./Landing.css";
import landing from "../../assets/landing.png";

const Landing = () => {
  return (
    <section id="landing">
      <div className="row">
        <div className="landing__wrapper">
            <div className="landing__content__title">
                Gain more knowledge in less time
            </div>
            <div className="landing__content__subtitle">
                Great summaries for busy people,
                Idviduals who have barely anytime to read,
                and even people who don't like to read.
            </div>
            <button className="btn home__cta--btn">Login</button>
        </div>
        <figure className="landing__image--mask">
            <img src={landing} alt="Landing" />
        </figure>
      </div>
    </section>
  );
};

export default Landing;
