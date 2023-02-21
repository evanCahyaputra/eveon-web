import React from "react";
import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/headline/eveon-1.png";

const Banner = () => {
  return (
    <section className="banner-one" id="home-page">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <div className="mc-form__response"></div>
              <h3>
                Powering<br />Electric Mobility
              </h3>
              <p>
                Ekosistem Pengisian Kendaaan Listrik dengan Inovasi<br />Teknologi Terdepan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
