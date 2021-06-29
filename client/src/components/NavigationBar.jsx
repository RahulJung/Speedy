import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../favicon.png";
import "../styles/styles.css";

function NavigationBar() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        {/* Add logo to the Navbar */}
        <Navbar.Brand>
          <img src={logo} width="60px" height="60px" /> FEROCIOUS MEDIA
        </Navbar.Brand>

        {/* Add toggle feature to the navbar when the window is minimized */}
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            {/* Navbar dropdown menu */}
            <NavDropdown title="Tools">
              <NavDropdown.Item href="#tools/fp">
                Full Page Test
              </NavDropdown.Item>
              <NavDropdown.Item href="#tools/livemap">
                Live Map
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tools/resources">
                Resources
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
