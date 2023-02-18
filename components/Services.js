import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText=""
          titleText={`Bring The Power Closer To You`}
        />
        <div className="row">
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>EV Charging Station (SPKLU)</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>Shopping Malls & Public Space</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Residence, Hotel, and Apartment</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Business District & Office Tower</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Public Parking & Facility</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Internal Business Operational</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
