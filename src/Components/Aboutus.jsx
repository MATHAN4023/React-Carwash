import React from "react";
import '../css/aboutus.css'; 

const Aboutus = () => {
  return (
    <div className="about-us hw100">
      {/* Heading Section */}
      <div className="row Heading align-items-center">
        <div className="col"></div>
        <div className="col text-center heading-title">
          <h2>About Us</h2>
        </div>
        <div className="col"></div>
      </div>

      {/* Content Section */}
      <div className="row content-section p3r">
        {/* Left Column */}
        <div className="col-sm-12 col-md-6 col-lg-4 text-center box bg-primary1 p-4">
          <h3>Our Mission</h3>
          <p>
            We aim to provide exceptional service to our clients by delivering quality solutions tailored to their needs.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-sm-12 col-md-6 col-lg-8 box bg-light p-4">
          <h3>Who We Are</h3>
          <p>
            We are a team of passionate individuals who are committed to delivering innovative and effective solutions in the industry.
            With a focus on continuous improvement and customer satisfaction, we strive to exceed expectations in everything we do.
          </p>
        </div>
      </div>

      <div className="row content-section p3r">
        {/* Left Column */}
        <div className="col-sm-12 col-md-6 col-lg-8 box bg-light p-4">
          <h3>Our Vision</h3>
          <p>
            Our vision is to become a leader in the industry by consistently providing high-quality services and maintaining a customer-first approach.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-sm-12 col-md-6 col-lg-4 text-center box bg-primary1  p-4">
          <h3>Our Values</h3>
          <p>
            Integrity, Innovation, and Customer-centricity are the core values that define our company and guide us in all our endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
