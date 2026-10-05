import "./ChoosePlan.css"
import pricing from "../../assets/pricing-top.png"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fontAwesomeIcon} from "@fortawesome/fontawesome-svg-core";
import { faFile, faSeedling, faHandshake, faChevronDown} from "@fortawesome/free-solid-svg-icons";

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
            <figure className="plan__image--mask">
              <img src={pricing} alt="Pricing plan illustration displayed in the plan header above the available subscription options"/>
              </figure>
          </div>
        </div>
        <div className="row">
          <div className=" container">
            <div className="plan__features--wrapper">
              <div className="plan__features">
                <figure className="plan__features--icon">
                  <fontAwesomeIcon icon={faFile} />
                </figure>
                <div className="plan__features--text">
                  <br>Key ideas in a few min</br>
                  with many books to read
                </div>
              </div>
              <div className="plan__features">
                <figure className="plan__features--icon">
                  <fontAwesomeIcon icon={faSeedling} />
                </figure>
                <div className="plan__features--text">
                  <br>3 million</br>
                  people growing with Summarist everyday
                </div>
              </div>
              <div className="plan__features">
                <figure className="plan__features--icon">
                  <fontAwesomeIcon icon={faHandshake} />
                </figure>
                <div className="plan__features--text">
                  <br>Precise recommendations</br>
                  collections curated by experts 
                </div>
              </div>
            </div>
            <div className="section__title">Choose the plan that fits you.</div>
            <div className="plan__card plan__card--active">
              <div className="plan__card--circle">
                <div className="plan__card--dot"></div>
              </div>
              <div className="plan__card--content">
                <div className="plan__card--title">Premium Plus Yearly</div>
                <div className="plan__card--price">$99.99/year</div>
                <div className="plan__card--text">7-day free trial included</div>
              </div>
            </div>
            <div className="plan__card--separator">
              <div className="plan__seperator">or</div>
            </div>
            <div className="plan__card">
              <div className="plan__card--circle"></div>
              <div className="plan__card--content">
                <div className="plan__card--title">Premium Monthly</div>
                <div className="plan__card--price">$9.99/month</div>
                <div className="plan__card--text">No trial included</div>
              </div>
            </div>
            <div className="plan__card--cta">
              <span className="btn--wrapper">
                <button className="btn">
                  <span>Start your free 7-day trial</span>
                </button>
              </span>
              <div className="plan__disclaimer">Cancel your trial at any time before it ends, and you won’t be charged.</div>
            </div>
            <div className="faq__wrapper">
              <div className="accordian__card">
                <div className="accordian__header">
                  <div className="accordian__title">How does the 7-day trial work?</div>
                  <figure className="accordian__icon accordian__icon--rotate">
                    <fontAwesomeIcon icon={faChevronDown} />
                  </figure>
                </div>
                <div className="collapse collapse show">
                  <div className="accordian__body">Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.</div>
                </div>
              </div>
              <div className="accordian__card">
                <div className="accordian__header">
                  <div className="accordian__title">Can I switch subscriptions from monthly to yearly, or yearly to monthly?</div>
                  <figure className="accordian__icon">
                    <fontAwesomeIcon icon={faChevronDown} />
                  </figure>
                </div>
                <div className="collapse">
                  <div className="accordian__body">While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.</div>
                </div>
              </div>
              <div className="accordian__card">
                <div className="accordian__header">
                  <div className="accordian__title">What's included in the Premium plan?</div>
                  <figure className="accordian__icon">
                    <fontAwesomeIcon icon={faChevronDown} />
                  </figure>
                </div>
                <div className="collapse">
                  <div className="accordian__body">Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.</div>
                </div>
              </div>
              <div className="accordian__card">
                <div className="accordian__header">
                  <div className="accordian__title">Can I cancel my trial during my subscription?</div>
                  <figure className="accordian__icon">
                    <fontAwesomeIcon icon={faChevronDown} />
                  </figure>
                </div>
                <div className="collapse">
                  <div className="accordian__body">You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="footer__top--wrapper">
                <div className="footer__block">
                  <div className="footer__link--title">Actions</div>
                  <div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Summarist Magazine</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Cancel subscription</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Help</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Contact Us</a>
                    </div>
                  </div>
                </div>
                <div className="footer__block">
                  <div className="footer__link--title">Useful Links</div>
                  <div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Pricing</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Summarist Business</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Gift Cards</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Authors & Publishers</a>
                    </div>
                  </div>
                </div>
                <div className="footer__block">
                  <div className="footer__link--title">Company</div>
                  <div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">About</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Careers</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Partners</a>
                    </div>
                    <div className="footer__link--wrapper">
                      <a className="footer__link">Code of Conduct</a>
                    </div>
                  </div>
                </div>
                <div className="footer__block">
                  <div className="footer__link--title">Other</div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Sitemap</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Legal Notice</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Terms of Service</a>
                  </div>
                  <div className="footer__link--wrapper">
                    <a className="footer__link">Privacy Policies</a>
                  </div>
                </div>
              </div>
              <div className="footer__copyright--wrapper">Copyright © 2023 Summarist. All rights reserved.</div>
            </div>
          </div>
        </section>
       </div>
      </div>
    </div>
  );
};

export default ChoosePlan;