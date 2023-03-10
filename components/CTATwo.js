import React from "react";
import BlockTitle from "./BlockTitle";

const CTATwo = () => {
  return (
    <section className="cta-two" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="center"
                paraText=""
                titleText={`What Makes Us Ahead: \n Proven Technology`}
              />
              <div className="row">
                <div className="col-lg-6 text-center">
                  <div className="cta-two__icon mb-3">
                    <i className="apton-icon-computer-graphic1"></i>
                  </div>
                  <p>
                    Global Expertise selama puluhan tahun melakukan pengembangan dan riset di bidang manajemen listrik, mekanik, dan daya, untuk menciptakan teknologi elektrifikasi kendaraan yang inovatif dan berkelanjutan.
                  </p>
                </div>
                <div className="col-lg-6 text-center cta-mt-5">
                  <div className="cta-two__icon mb-3">
                    <i className="apton-icon-app-development"></i>
                  </div>
                  <p>
                    Product Excellence yang lahir dari portofolio kelas dunia dalam pengembangan infrastruktur kelistrikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
