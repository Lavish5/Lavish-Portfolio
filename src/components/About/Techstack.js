import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiSpark,
  DiGit,
  DiAws
} from "react-icons/di";
import {
  SiPostgresql,
  SiMicrosoftazure
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="icon-text"> Python </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
        <p className="icon-text"> Spark </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="icon-text"> Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="icon-text"> PostgreSQL </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p className="icon-text"> Aws </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p className="icon-text"> Azure </p>
      </Col>
    </Row>
  );
}

export default Techstack;
