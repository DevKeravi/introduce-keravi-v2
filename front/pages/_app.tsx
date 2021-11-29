import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Gnb from "../src/components/Gnb";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb />
      <Row>
        <Col lg={12} className="col-xl-8" xl={{ offset: 2 }}>
          <Component {...pageProps} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default MyApp;
