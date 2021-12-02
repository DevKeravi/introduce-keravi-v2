import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Gnb from "../src/components/Gnb";
import Footer from "../src/components/Footer";
import "../styles/globals.css";
import FooterCarousel from "../src/components/FooterCarousel";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container fluid>
        <Col>
          <Row>
            <Gnb />
          </Row>
          <Row>
            <Component {...pageProps} />
          </Row>
          <Row>
            <Col className="col-xl-8 col-xs-12" xl={{ offset: 2 }}>
              <FooterCarousel />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#423f3b" }}>
            <Footer />
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default MyApp;
