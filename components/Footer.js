import React, { useContext } from "react";

import FooterLogo from "../assets/images/main-logo.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Enter your email address"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Subscribe Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p>
                    PT. Eveon Daya Nusantara<br />
                    Treasury Tower, Lantai 6 Unit F<br /> District 8, SCBD Lot 28<br />
                    Jl. Jend. Sudirman Kav. 52-53<br />
                    Jakarta Selatan 12190
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Company</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Download</a>
                      </li>
                      <li>
                        <a href="#">Free Trial</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-xl-end justify-content-lg-end">
                <div className="footer-widget">
                <h3 className="footer-widget__title">Contact</h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li>(+62) 812 949 777 07</li>
                    <li>(+62) 21 2960 8025</li>
                    <li>info@eveon.co.id</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright 2023 by eveon.co.id</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
