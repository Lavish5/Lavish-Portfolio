import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-text">
            I like building systems that are simple to trust: clear data flows,
            strong validation, predictable deployments, and documentation that
            helps teams move faster.
            <br />
            My focus is not just moving data from one place to another, but
            making sure it is accurate, available, and useful for the people who
            depend on it.
            <br />
            <br />
            Outside day-to-day engineering, I enjoy sharpening my craft through:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring modern data architecture patterns
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and sharing technical learnings
            </li>
            <li className="about-activity">
              <ImPointRight /> Turning complex problems into practical solutions
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
