import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container className="contact-content">
        <h1 className="project-heading">
          Let's <strong className="purple">Connect</strong>
        </h1>
        <p className="contact-intro">
          Thanks for visiting my portfolio. I am always open to meaningful
          conversations around data engineering, cloud platforms, analytics, and
          opportunities where I can help build reliable data solutions.
        </p>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="contact-social-heading">Reach Me On</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lavish5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <p className="contact-link-label">GitHub</p>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lavish-jain-98aaa21b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <p className="contact-link-label">LinkedIn</p>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:lavishjain05@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiFillMail />
                </a>
                <p className="contact-link-label">Email</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
