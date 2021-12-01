import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Gnb from "../src/components/Gnb";
import Footer from "../src/components/Footer";
import "../styles/globals.css";

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
          <Row style={{ backgroundColor: "#cbbeb5" }}>
            <Footer />
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default MyApp;
