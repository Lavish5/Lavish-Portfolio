import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiLinux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"> 
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="icon-text"> VS Code </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="icon-text">PostMan </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="icon-text"> Slack </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
