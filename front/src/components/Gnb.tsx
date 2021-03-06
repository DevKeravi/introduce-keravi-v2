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
  const [gnbFontColor, setGnbFontColor] = useState("white");
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setGnbColor("white");
        setGnbFontColor("black");
        setShadow("5px 3px 40px -15px grey");
      } else {
        setGnbColor("transparent");
        setGnbFontColor("white");
        setShadow("");
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
        expand="xl"
        style={{
          background: `${gnbColor}`,
          boxShadow: `${shadow}`,
        }}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand style={{ color: `${gnbFontColor}` }} href="#">
            Keravi Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                style={{ color: `${gnbFontColor}`, fontSize: "1.2rem" }}
                href="#about"
              >
                About me
              </Nav.Link>
              <Nav.Link
                style={{ color: `${gnbFontColor}`, fontSize: "1.2rem" }}
                href="#skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                style={{ color: `${gnbFontColor}`, fontSize: "1.2rem" }}
                href="#archiving"
              >
                Archiving
              </Nav.Link>
              <Nav.Link
                style={{ color: `${gnbFontColor}`, fontSize: "1.2rem" }}
                href="#projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{ color: `${gnbFontColor}`, fontSize: "1.2rem" }}
                href="#closing"
              >
                Closing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row style={{ textAlign: "center", marginTop: "5rem" }}>
          <Col style={{ padding: "1rem" }}>
            <TitleDiv className="display-3">?????????</TitleDiv>
            <TitleDiv className="display-3">??? ????????? ???????????????</TitleDiv>
            <BoxDiv></BoxDiv>
            <DescDiv>???????????????</DescDiv>
            <DescDiv>????????? ????????? ???????????? ??????????????? ??????????????????.</DescDiv>
            <DescDiv>
              ????????? ?????? ?????????, ??????????????? ?????? ??????????????? ?????? ???????????????.
            </DescDiv>
            <ButtonWrapper
              style={{ marginTop: "2rem", fontSize: "1.3rem" }}
              onClick={handleMore}
            >
              ??? ????????????
            </ButtonWrapper>
          </Col>
        </Row>
      </Container>
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
