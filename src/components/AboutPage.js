import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="profile-description">
        <div className="description">
          <h2>Get To Know Me!</h2>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section. <br />
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </div>
        <div className="skills">
          <ul>
            <button className="btn btn-danger skill-btn">HTML</button>
            <button className="btn btn-danger skill-btn">CSS</button>
            <button className="btn btn-danger skill-btn">Boot Strap</button>
            <button className="btn btn-danger skill-btn">Java Script</button>
            <button className="btn btn-danger skill-btn">ReactJS</button>
            <button className="btn btn-danger skill-btn">JHipster</button>
            <button className="btn btn-danger skill-btn">Java</button>
            <button className="btn btn-danger skill-btn">Spring Boot</button>
            <button className="btn btn-danger skill-btn">Redux</button>
            <button className="btn btn-danger skill-btn">PostgreSQL</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
