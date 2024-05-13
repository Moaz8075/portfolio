import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAmazonaws,
  SiTypescript,
  SiSpringboot,
  SiWeb3Dotjs,
  SiGraphql
} from "react-icons/si";
import Particle from "../Particle";
import Toolstack from "./Toolstack";
import Github from "./Github";

function Techstack() {
  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Particle />
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus /><p style={{fontSize: '30px'}}>C++</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 /><p style={{fontSize: '30px'}}>Java Srcipt</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws /><p style={{fontSize: '30px'}}>AWS Amazon</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs /><p style={{fontSize: '30px'}}>NodeJs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript /><p style={{fontSize: '30px'}}>TypeScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringboot /><p style={{fontSize: '30px'}}>SpringBoot</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact /><p style={{fontSize: '30px'}}>React</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb /><p style={{fontSize: '30px'}}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs /><p style={{fontSize: '30px'}}>NextJs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit /><p style={{fontSize: '30px'}}>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql /><p style={{fontSize: '30px'}}>PostgreSQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython /><p style={{fontSize: '30px'}}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava /><p style={{fontSize: '30px'}}>Java</p>
        </Col>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Row>
    </Container >

  );
}

export default Techstack;
