import React from "react";
import BlockTitle from "./BlockTitle";
import evChargingIcon from "../assets/images/icon/ev_charging_station.svg";
import apartmentIcon from "../assets/images/icon/hotel.svg";
import publicSpaceIcon from "../assets/images/icon/public_space.svg";
import businessIcon from "../assets/images/icon/business.svg";
import parkingIcon from "../assets/images/icon/parking.svg";

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
                  <img
                    src={evChargingIcon}
                    height={100}
                    width={100}
                    alt="EV Charging Station"
                  />
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
                  <img
                    src={publicSpaceIcon}
                    height={80}
                    width={80}
                    alt="Shopping Malls & Public Space"
                  />
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
                  <img
                    src={apartmentIcon}
                    height={90}
                    width={90}
                    alt="Residence, Hotel, and Apartment"
                  />
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
                  <img
                    src={businessIcon}
                    height={90}
                    width={90}
                    alt="Business District & Office Tower"
                  />
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
                  <img
                    src={parkingIcon}
                    height={70}
                    width={70}
                    alt="Public Parking & Facility"
                  />
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
