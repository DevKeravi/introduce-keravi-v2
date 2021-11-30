import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

export interface SkillCardProps {
  title: string;
  src: string;
  alt: string;
}
const ContainerWrapper = styled(Container)`
  background-color: white;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 5px 3px 40px -15px black;
  border: none;
  padding: 2.5rem;
  :hover {
    transform: translateY(30px);
    transition-duration: 1s;
  }
  :not(:hover) {
    transform: transitionY(0px);
    transition-duration: 1s;
  }
`;

const SkillCard = ({ title, src, alt }: SkillCardProps) => {
  return (
    <ContainerWrapper>
      <Row>
        <Col
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid lightgrey",
              paddingBottom: "1.5rem",
              color: "#525266",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={src} alt={alt} fluid />
        </Col>
      </Row>
    </ContainerWrapper>
  );
};
export default SkillCard;
