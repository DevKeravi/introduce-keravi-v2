import type { NextPage } from "next";
import { Col, Row, Container } from "react-bootstrap";
import AboutMe from "../src/components/AboutMe";
import Skills from "../src/components/Skills";
import Archiving from "../src/components/Archiving";
import Projects from "../src/components/Projects";
import Greetings from "../src/components/Greetings";

const Home: NextPage = () => {
  return (
    <Container fluid>
      <Row id="about">
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <AboutMe />
        </Col>
      </Row>
      <Row
        style={{
          backgroundImage: `url("/coolback.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "5rem",
        }}
        id="skills"
      >
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <Skills />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#423f3b" }} id="archiving">
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <Archiving />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#525266" }} id="projects">
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <Projects />
        </Col>
      </Row>
      <Row id="closing">
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <Greetings />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
