import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
const BackgroundContainer = styled(Container)`
  position: relative;
  padding-bottom: 8rem;
  padding-left: 0;
  padding-right: 0;
  background: rgb(140, 200, 147);
  background: linear-gradient(
    263deg,
    rgba(140, 200, 147, 1) 1%,
    rgba(126, 173, 142, 1) 21%,
    rgba(82, 140, 132, 1) 85%
  );
`;

const ShapedDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
  }
  .shape-fill {
    fill: #ffffff;
  }
`;
const TitleDiv = styled.h1`
  font-weight: bold;
  color: #fcf7ff;
`;
const DescDiv = styled.h5`
  color: #fcf7ff;
`;
const BoxDiv = styled.div`
  display: inline-block;
  width: 5rem;
  height: 3px;
  background-color: #fcf7ff;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const ButtonWrapper = styled(Button)`
  border: none;
  background: rgb(0, 91, 77);
  background: linear-gradient(
    61deg,
    rgba(0, 91, 77, 1) 0%,
    rgba(82, 140, 132, 1) 100%
  );
`;

const Gnb = () => {
  const [gnbColor, setGnbColor] = useState("transparent");
  const [gnbFontColor, setGnbFontColor] = useState("lightgrey");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setGnbColor("white");
        setGnbFontColor("black");
      } else {
        setGnbColor("transparent");
        setGnbFontColor("lightgrey");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const router = useRouter();
  const handleMore = useCallback(() => {
    router.push("/#about");
  }, [router]);

  return (
    <BackgroundContainer fluid>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: `${gnbColor}` }}
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand style={{ color: `${gnbFontColor}` }} href="#home">
            Keravi's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link style={{ color: `${gnbFontColor}` }} href="#about">
                About me
              </Nav.Link>
              <Nav.Link style={{ color: `${gnbFontColor}` }} href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link style={{ color: `${gnbFontColor}` }} href="#archiving">
                Archiving
              </Nav.Link>
              <Nav.Link style={{ color: `${gnbFontColor}` }} href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link style={{ color: `${gnbFontColor}` }} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row style={{ textAlign: "center", marginTop: "3rem" }}>
        <Col>
          <TitleDiv className="display-3">채성렬</TitleDiv>
          <TitleDiv className="display-3">웹 개발자 포트폴리오</TitleDiv>
          <BoxDiv></BoxDiv>
          <DescDiv>안녕하세요</DescDiv>
          <DescDiv>공부와 논의를 좋아하는 프론트엔드 개발자입니다.</DescDiv>
          <DescDiv>
            학습을 위한 열정과, 주도적으로 일을 수행하는게 저의 장점입니다.
          </DescDiv>
          <ButtonWrapper
            style={{ marginTop: "2rem", fontSize: "1.3rem" }}
            onClick={handleMore}
          >
            더 알아보기
          </ButtonWrapper>
        </Col>
      </Row>
      <ShapedDiv>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </ShapedDiv>
    </BackgroundContainer>
  );
};
export default Gnb;
