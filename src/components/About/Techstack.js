import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiSpark,
  DiGit,
  DiAws,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMicrosoftazure,
  SiJavascript,
  SiDocker,
  SiDatabricks,
  SiSelenium
} from "react-icons/si";

import {
  TbSql
} from "react-icons/tb"

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
        <TbSql />
        <p className="icon-text"> Sql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p className="icon-text"> Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
        <p className="icon-text"> Databricks</p>
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
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="icon-text"> Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p className="icon-text"> Selenium</p>
      </Col>
    </Row>
  );
}

export default Techstack;
