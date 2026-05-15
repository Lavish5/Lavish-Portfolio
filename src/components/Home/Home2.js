import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Quick <span className="purple">Introduction</span>
            </h1>
            <p className="home-about-body">
              I am a results-driven{" "}
              <b className="purple">Data Engineer</b> with{" "}
              <b className="purple">5+ years of experience</b> building scalable
              data platforms, pipelines, and analytics-ready solutions.
              <br />
              <br />
              I enjoy turning complex, high-volume data into{" "}
              <b className="purple">reliable data products</b> that teams can
              trust for reporting, decision-making, and automation.
              <br />
              <br />
              My work focuses on clean architecture, strong validation,
              performance, governance, and building systems that stay
              maintainable as data and business needs grow.
              <br />
              <br />
              I care about writing practical solutions that are easy to
              monitor, easy to improve, and useful for the people who depend on
              data every day.
            </p>
            <p className="home-build-quote">
              Build reliable systems, keep learning, and make the work easier
              for the next person.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
