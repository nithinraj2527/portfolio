import React from "react";
import "./Menubar.css";
import { Nav, Navbar } from "react-bootstrap";

const Menubar = () => {
  return (
    <>
      <div className="header">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu-bar">
              <Nav.Link className="menu-link" href={"/"}>
                {"Home"}
              </Nav.Link>
              <Nav.Link className="menu-link" href="/about">
                {"About"}
              </Nav.Link>
              <Nav.Link className="menu-link" href={"/projects"}>
                Projects
              </Nav.Link>
              <Nav.Link className="menu-link" href={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Menubar;
