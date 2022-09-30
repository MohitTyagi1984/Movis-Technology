import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './../../assets/scss/core/sections/header-sec.scss';
import Logo from './partials/Logo';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  return (
    <header
    >
      <section class="fga-section" style={{ backgroundColor: '#161a1c', position: 'fixed', width: '100%', zIndex: '99999', fontSize:'14px' }}>
        <div class="container">
          <div class="row">
            <div>
              <Navbar collapseOnSelect expand="lg" variant="dark">
              <div style={{float:'left'}}>
                <Logo
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{float:'left'}}>
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="About">About</Nav.Link>
                    <NavDropdown title="Our Services" id="collasible-nav-dropdown" style={{backgroundColor: '#161a1c', fontSize:'14px'}}>
                      <NavDropdown.Item href="SoftwareDevelopment">Software and Application Development</NavDropdown.Item>
                      <NavDropdown.Item href="WebsiteDesign">
                        Website Design and Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="Seo">SEO and Digital Marketing</NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item href="EcommerceDevelopment">
                        E-Commerce Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="ERPSolutions">
                        ERP Solutions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="OurProducts">
                        Product Maintenance and support
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#features">Clients</Nav.Link> */}
                    {/* <Nav.Link href="#features">Career</Nav.Link> */}
                    {/* <Nav.Link href="#features">Blog</Nav.Link> */}
                    <Nav.Link href="OurProducts">Products</Nav.Link>
                    <Nav.Link href="Pricing">Pricing</Nav.Link>
                    <Nav.Link href="ContactUs">Contact Us</Nav.Link>
                  </Nav>
                  {/* <Nav>
          <Nav.Link href="#deets">Our Technology</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Angular
          </Nav.Link>
        </Nav> */}
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          
        </div>
       
      </section>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

