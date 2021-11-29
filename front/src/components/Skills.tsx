import CardTitle from "./CardTitle";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <Container
      style={{
        backgroundImage: `url("/coolback.png")`,
        backgroundRepeat: "no-repeat",
        marginTop: "5rem",
      }}
    >
      <Row>
        <Col>
          <CardTitle title="SKILLS" />
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
