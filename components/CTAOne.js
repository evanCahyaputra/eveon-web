import React from "react";
import BlockTitle from "./BlockTitle";
import CtaMoc1 from "../assets/images/headline/eveon-2.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText=""
                titleText={`Where We Are \n Heading To`}
              />
              <div className="cta-one__text">
                <p>
                Eveon memiliki misi untuk membangun infrastruktur Electric Vehicle (EV) di seluruh Indonesia, dengan menciptakan ekosistem EV Charging Station yang masif dalam memfasilitasi kehidupan mobilitas manusia yang lebih maju dan efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
