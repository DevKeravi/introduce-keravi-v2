import { Container, Row, Col } from "react-bootstrap";
import CardTitle from "./CardTitle";
import GameCard from "./GameCard";
import ProjectsCard from "./ProjectsCard";
import {
  HazyShade,
  CouponZ,
  GoBird,
  IntroduceOne,
  IntroduceTwo,
  GameCardProps,
  SimpleChat,
} from "./ProjectsData";
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
          <ProjectsCard {...IntroduceOne} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...GoBird} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...SimpleChat} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...IntroduceTwo} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCard {...CouponZ} />
        </Col>
      </Row>
      <Row>
        <Col>
          <GameCard {...GameCardProps} />
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
