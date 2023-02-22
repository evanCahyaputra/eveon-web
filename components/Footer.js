import React, { useContext } from "react";

import FooterLogo from "../assets/images/main-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p>
                    PT. Eveon Daya Nusantara<br />
                    Treasury Tower, Lantai 6 Unit F, District 8, SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190
                  </p>
                  <p>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li><b>Call : </b>(+62) 812 949 777 07 , (+62) 21 2960 8025</li>
                      <li><b>Email : </b>info@eveon.co.id</li>
                    </ul>
                  </p>
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
