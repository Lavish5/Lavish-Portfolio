import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlineUser,
  AiFillContacts,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <span className="nav-link-content">
                  <AiOutlineHome className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">Home</span>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <span className="nav-link-content">
                  <AiOutlineUser className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">About</span>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <span className="nav-link-content">
                  <AiOutlineFolder className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">Projects</span>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <span className="nav-link-content">
                  <CgFileDocument className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">Resume</span>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://lavish5.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="nav-link-content">
                  <ImBlog className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">Blogs</span>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <span className="nav-link-content">
                  <AiFillContacts className="nav-link-icon" aria-hidden="true" />
                  <span className="nav-link-label">Contact</span>
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
