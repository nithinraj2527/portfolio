import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="  main-container container-fluid">
        <h3> Projects</h3>
        <div>
          <div className="work1">
            <div className="img"></div>
            <div className="work-description">
              <h4>Flipkart clone</h4>
              <div>
                I re-created the frontend of Flipkart's official web app because
                I got attracted to their beautiful UI. It was a great experience
                for me to build the entire frontend. <br />
                Used HTML, CSS, Boot strap and Java Script for building UI
              </div>
              <button className="btn btn-info btn-goto"> Go to</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
