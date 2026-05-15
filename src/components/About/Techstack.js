import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiAws } from "react-icons/di";
import {
  SiApachekafka,
  SiApachespark,
  SiDatabricks,
  SiDbt,
  SiDelta,
  SiMicrosoftazure,
  SiSnowflake,
} from "react-icons/si";
import {
  TbGitBranch,
  TbHierarchy,
  TbShieldCheck,
  TbSql,
  TbTransform,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="icon-text">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p className="icon-text">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <p className="icon-text">PySpark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
        <p className="icon-text">Databricks</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p className="icon-text">Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p className="icon-text">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDelta />
        <p className="icon-text">Delta Lake</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
        <p className="icon-text">Snowflake</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
        <p className="icon-text">dbt</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <p className="icon-text">Kafka</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbShieldCheck />
        <p className="icon-text">Data Quality</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbHierarchy />
        <p className="icon-text">Data Modeling</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbTransform />
        <p className="icon-text">ETL / ELT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbGitBranch />
        <p className="icon-text">CI/CD</p>
      </Col>
    </Row>
  );
}

export default Techstack;
