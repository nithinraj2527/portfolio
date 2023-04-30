import React from "react";
import Menubar from "./Menubar";
import "./HomeScreen.css";
import AboutPage from "./AboutPage";
import Projects from "./Projects";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <>
      <Menubar />
      <div className="carousel-body">
        <div className="about-me">
          <h1>
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span>
            <span className="blast"> </span>
            <span className="blast">I</span>
            <span className="blast"> </span>
            <span className="blast">a</span>
            <span className="blast">m</span>
            <span className="blast"> </span>
            <span className="blast">N</span>
            <span className="blast">I</span>
            <span className="blast">T</span>
            <span className="blast">H</span>
            <span className="blast">I</span>
            <span className="blast">N</span>
            <span className="blast"> </span>
            <span className="blast">R</span>
            <span className="blast">A</span>
            <span className="blast">J</span>
          </h1>
          <h4>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web <br />
            Applications that leads to the success of the overall product
          </h4>
          <button
            className="btn button-style btn-outline-warning"
            type="button"
          >
            {" "}
            <b>Contact</b>
          </button>
        </div>
      </div>
      <AboutPage />
      <Projects />
      <Footer />
    </>
  );
};

export default HomeScreen;
