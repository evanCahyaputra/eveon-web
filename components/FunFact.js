import React from "react";
import BlockTitle from "./BlockTitle";

const FunFact = () => {
  return (
    <section className="funfact-one" id="our-value">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <BlockTitle
              textAlign="center"
              paraText=""
              className="fun-fact-title"
              titleText={`Drive The Real Matters`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="funfact-one__single">
              <h3 className="counter">
                People
              </h3>
              <p>Memberikan kepraktisan dan efisiensi untuk meningkatkan kualitas hidup manusia.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="funfact-one__single">
              <h3 className="counter">
                Experience
              </h3>
              <p>Menghadirkan teknologi power management terbaik yang tentunya aman dan andal.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="funfact-one__single">
              <h3 className="counter">
                Generation
              </h3>
              <p>Mendorong Green Manner yang berdampak positif terhadap lingkungan dengan praktik keberlanjutan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
