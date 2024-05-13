import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /><p style={{fontSize: '30px'}}>MacOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p style={{fontSize: '30px'}}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><p style={{fontSize: '30px'}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /><p style={{fontSize: '30px'}}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /><p style={{fontSize: '30px'}}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
