import { useCallback, useState } from "react";
import {
  Navbar,
  Nav,
  Image,
  Modal,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export interface IProjectsImage {
  src: string;
  alt: string;
}

const ProjectsImages = (prop: IProjectsImage[]) => {
  const [toogleModal, setToogleModal] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const handlePrev = useCallback(() => {
    if (curIndex + 1 > 1) {
      setCurIndex(curIndex - 1);
    }
  }, [curIndex]);
  const handleNext = useCallback(() => {
    if (curIndex + 1 < Object.keys(prop).length) {
      setCurIndex(curIndex + 1);
    } else {
      setCurIndex(0);
    }
  }, [curIndex, prop]);
  const handleModal = useCallback(() => {
    setToogleModal(true);
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image
          style={{ height: "700px" }}
          src={prop[curIndex].src}
          alt={prop[curIndex].alt}
          fluid
        />
      </div>
      <div style={{ marginTop: "3rem", textAlign: "center", color: "#ff6666" }}>
        <span style={{ marginRight: "1rem" }} onClick={handlePrev}>
          <LeftOutlined />
        </span>
        <span style={{ color: "black" }}>
          {curIndex + 1} / {Object.keys(prop).length}
        </span>
        <span style={{ marginLeft: "1rem" }} onClick={handleNext}>
          <RightOutlined />
        </span>
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center", color: "#ff6666" }}>
        <Button
          onClick={handleModal}
          style={{ backgroundColor: "#ff6666", border: "none" }}
        >
          확대하기
        </Button>
      </div>
      <Modal
        fullscreen
        show={toogleModal}
        onHide={() => {
          setToogleModal(false);
        }}
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>사진 더보기</Modal.Title>
        </Modal.Header>
        <Nav
          className="justify-content-center"
          style={{
            marginBottom: "1rem",
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="prev" onClick={handlePrev}>
              이전 사진
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "black" }} eventKey="cur">
              {curIndex + 1} / {Object.keys(prop).length}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="next" onClick={handleNext}>
              다음 사진
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Modal.Body style={{ backgroundColor: "#e5e5e5" }}>
          <Container fluid>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Image
                  src={prop[curIndex].src}
                  alt={prop[curIndex].alt}
                  fluid
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProjectsImages;
