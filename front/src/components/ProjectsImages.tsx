import { useCallback, useRef, useState } from "react";
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
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";

export interface IProjectsImage {
  src: string;
  alt: string;
}

const ProjectsImages = (prop: IProjectsImage[]) => {
  const modalBody: any = useRef(null);
  const zoomValue: number = 20;
  const [toogleModal, setToogleModal] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(40);
  const handlePrev = useCallback(() => {
    if (curIndex + 1 > 1) {
      setCurIndex(curIndex - 1);
    } else {
      setCurIndex(Object.keys(prop).length - 1);
    }
    if (modalBody.current !== null) {
      modalBody.current.scrollTop = 0;
    }
  }, [curIndex, modalBody, prop]);

  const handleNext = useCallback(() => {
    if (curIndex + 1 < Object.keys(prop).length) {
      setCurIndex(curIndex + 1);
    } else {
      setCurIndex(0);
    }
    if (modalBody.current !== null) {
      modalBody.current.scrollTop = 0;
    }
  }, [curIndex, prop, modalBody]);

  const handleModal = useCallback(() => {
    setToogleModal(true);
  }, []);

  const handleZoomIn = useCallback(() => {
    if (imageWidth + zoomValue <= 100) {
      setImageWidth(imageWidth + zoomValue);
    }
  }, [imageWidth]);

  const handleZoomOut = useCallback(() => {
    if (imageWidth - zoomValue >= 20) {
      setImageWidth(imageWidth - zoomValue);
    }
  }, [imageWidth]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image src={prop[0].src} alt={prop[0].alt} fluid thumbnail />
      </div>
      <div style={{ marginTop: "2rem", textAlign: "center", color: "#ff6666" }}>
        <Button
          onClick={handleModal}
          style={{ backgroundColor: "#ff6666", border: "none" }}
        >
          더보기 ( 총 {Object.keys(prop).length} 장 )
        </Button>
      </div>
      <Modal
        fullscreen
        show={toogleModal}
        onHide={() => {
          setToogleModal(false);
          setCurIndex(0);
          setImageWidth(40);
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
            <Nav.Link eventKey="prev" onClick={handleZoomIn}>
              <ZoomInOutlined />
            </Nav.Link>
          </Nav.Item>
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
          <Nav.Item>
            <Nav.Link eventKey="prev" onClick={handleZoomOut}>
              <ZoomOutOutlined />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Modal.Body ref={modalBody} style={{ backgroundColor: "#e5e5e5" }}>
          <Container fluid>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Image
                  style={{ width: `${imageWidth}%` }}
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
/*
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
*/
export default ProjectsImages;
