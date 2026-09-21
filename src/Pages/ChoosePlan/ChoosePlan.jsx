import "./ChoosePlan.css"
import pricing from "../../assets/pricing-top.png"

const ChoosePlan = () => {
  return (
    <div id="__next">
      <div className="wrapper wrapper__full">
       <div className="sidebar__overlay sidebar__overlay--hidden"></div>
       <div className="plan">
        <div className="plan__header--wrapper">
          <div className="plan__header">
            <div className="plan__title">Get unlimited access to many amazing books to read</div>
            <div className="plan__sub--title">Turn ordinary moments into amazing learning opportunities</div>
            <figure className="plan__image--mask"><img src={pricing} alt="Pricing plan illustration displayed in the plan header above the available subscription options"/></figure>
          </div>
        </div>
        <div className="row"></div>
        <section id="footer"></section>
       </div>
      </div>
    </div>
  );
};

export default ChoosePlan;