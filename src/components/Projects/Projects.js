import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dataQuality from "../../Assets/Projects/dataQuality.png";
import analytics from "../../Assets/Projects/multiCloudETL.png";
import lakehouse from "../../Assets/Projects/lakehouse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Things I've <strong className="purple">Built </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few things I've built to solve real data problems and turn raw
          information into reliable, useful insights.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataQuality}
              isBlog={false}
              title="Automated Data Quality Framework"
              description="Built a data quality monitoring framework using Great Expectations and Python to validate and profile structured datasets. Implemented automated expectation suites with threshold-based alerting to detect schema drift and null violations before reaching downstream consumers."
              ghLink="https://github.com/Lavish5/data-quality-framework"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analytics}
              isBlog={false}
              title="Multi-Cloud ETL Pipeline"
              description="Engineered an end-to-end ETL pipeline ingesting raw data from AWS S3, transforming with PySpark on Azure Databricks, and loading into Snowflake for analytics consumption. Optimized data workflows for scalability and performance across multiple cloud platforms."
              ghLink="https://github.com/Lavish5/multi-cloud-etl-pipeline"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lakehouse}
              isBlog={false}
              title="Lakehouse Architecture Implementation"
              description="Architected and implemented an enterprise-grade Lakehouse solution on Azure Databricks with ADLS Gen2 and Delta Lake. Designed full Medallion architecture (Bronze/Silver/Gold) with data governance, Unity Catalog integration, and automated CI/CD pipelines for production deployments."
              ghLink="https://github.com/Lavish5/lakehouse-architecture"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
