import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <div className="footer__link--title">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <button type="button" className="footer__link">Summarist Magazine</button>
                </div>
                <div className="footer__link--wrapper">
                  <button type="button" className="footer__link">Cancel Subscription</button>
                </div>
                <div className="footer__link--wrapper">
                  <button type="button" className="footer__link">Help</button>
                </div>
                <div className="footer__link--wrapper">
                  <button type="button" className="footer__link">Contact us</button>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Useful Links</div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Pricing</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Summarist Business</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Gift Cards</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Authors & Publishers</button>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">About</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Careers</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Partners</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Code of Conduct</button>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Sitemap</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Legal Notice</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Terms of Service</button>
              </div>
              <div className="footer__link--wrapper">
                <button type="button" className="footer__link">Privacy Policies</button>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper">
            <p>&copy; 2023 Summarist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
