import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import BlockTitle from "./BlockTitle";

const Contact = () => {
  const form = useRef();
  const recaptchaRef = React.createRef();

  const sendEmail = async(e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    const data = new FormData(e.target);
    
    var templateParams = {
      user_name: data.get('user_name'),
      user_email: data.get('user_email'),
      user_subject: data.get('user_subject'),
      phone_number: data.get('phone_number'),
      message: data.get('message'),
      'g-recaptcha-response': token
    };

    emailjs.send('service_pb24s37', 'template_24v9y8k', templateParams, 'V90LtnkKv4QUNRRz1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-one" id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form ref={form} onSubmit={sendEmail} className="contact-form-validated contact-one__form">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeLP6QkAAAAAN75mJqH4SOod9XkgPVU7twwovte"
              />
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Selangkah Lebih Dekat dengan Eveon`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" required placeholder="Name" name="user_name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" required placeholder="Email Address" name="user_email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" required placeholder="Subject" name="user_subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" required placeholder="Phone Number" name="phone_number" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    required
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
