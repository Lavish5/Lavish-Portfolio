import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import Particle from "../Particle";
import pdf from "../../Assets/Lavish_Jain_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {numPages &&
              Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                <div
                  key={page}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
                </div>
              ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
