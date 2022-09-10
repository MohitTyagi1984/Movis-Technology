import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
      <section class="fga-section" style={{ backgroundColor: '#002346', position: 'fixed', width: '100%', zIndex: '99999', fontSize:'16px' }}>
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
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Clients</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        App Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item href="#action/3.4">
                        E-Commerce Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        ERP Solutions
                      </NavDropdown.Item>
                    </NavDropdown>
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
