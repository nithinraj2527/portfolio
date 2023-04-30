import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h5>Nithin Raj</h5>
          <p className="welcome-note">
            Frontend Web Developer building the Front-end of Websites and Web
            Applications that leads to the success of the overall product.
          </p>
        </div>
        <div>
          <div className="address">
            <p>
              <h6>nithinrajpofficial@gmail.com</h6>
              <h6>Github</h6>
              <h6>linkedin</h6>
              <h6>+91 6282888732</h6>
              <div> Kannur, Kerala, India 670334</div>
            </p>
          </div>
        </div>
        <div className="map"></div>
      </div>
    </>
  );
};

export default Footer;
