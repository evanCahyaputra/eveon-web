import React from "react";
import BlockTitle from "./BlockTitle";

const Contact = () => {
  return (
    <section className="contact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Selangkah Lebih Dekat dengan Eveon`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email Address" name="email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
