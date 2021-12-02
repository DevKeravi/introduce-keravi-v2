import { Container, Row, Col } from "react-bootstrap";
import ProjectsDesc, { IProjectsDesc } from "./ProjectsDesc";
import ProjectsImages, { IProjectsImage } from "./ProjectsImages";
import ProjectsInfo, { IProjectsInfo } from "./ProjectsInfo";

export interface ProjectsCardProps {
  title: string;
  subTitle: string;
  images: IProjectsImage[];
  desc: IProjectsDesc[];
  info: IProjectsInfo[];
}

const ProjectsCard = (prop: ProjectsCardProps) => {
  return (
    <Container
      style={{
        backgroundColor: "white",
        borderRadius: "10px 10px 10px 10px",
        padding: "3rem",
        boxShadow: " 5px 3px 40px -15px black",
        marginBottom: "3rem",
      }}
    >
      <Row
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        <Col>
          <h1>{prop.title}</h1>
        </Col>
      </Row>
      <Row style={{ textAlign: "center", marginBottom: "3rem", color: "grey" }}>
        <Col>{prop.subTitle}</Col>
      </Row>
      <Row className="g-5">
        <Col xl={6} lg={12}>
          <ProjectsImages {...prop.images} />
        </Col>
        <Col xl={6} lg={12}>
          <Row>
            <ProjectsDesc {...prop.desc} />
          </Row>
          <Row>
            <ProjectsInfo {...prop.info} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ProjectsCard;
