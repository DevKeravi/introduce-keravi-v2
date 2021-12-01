import { Container, Row, Col } from "react-bootstrap";
import CardTitle from "./CardTitle";
import ProjectsCard from "./ProjectsCard";
import { HazyShade, CouponZ } from "./ProjectsData";
const Projects = () => {
  return (
    <Container style={{ paddingBottom: "5rem" }}>
      <Row>
        <Col>
          <CardTitle title="PROJECTS" color="#cbbeb5" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...HazyShade} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...CouponZ} />
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
