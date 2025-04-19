import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiBitbucket,
  SiJira,
  SiPostman,
  SiSlack
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"> 
        <SiLinux />
        <p className="icon-text"> Linux </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="icon-text"> VS Code </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p className="icon-text"> Bitbucket </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p className="icon-text"> Jira </p>
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
